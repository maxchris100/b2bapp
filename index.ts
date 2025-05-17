// import { serve } from "bun";
import { serveStatic } from "hono/serve-static";
import path from 'path'
import fs from 'fs/promises'
import { Hono } from 'hono';
import trpcHandler from './server/routes/trpc';
import { cors } from 'hono/cors';
import type { VercelRequest, VercelResponse } from '@vercel/node'

const app = new Hono();

app.use(cors({
    origin: ['http://localhost:3000', 'https://b2bapp-maxchris100s-projects.vercel.app'],  // Allow requests from frontend
    allowMethods: ['GET', 'POST', 'OPTIONS'],  // Make sure these methods are allowed
    allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Add more if needed
}));


app.use('/trpc/*', async (c, next) => {
    const url = new URL(c.req.url);
    if (url.pathname.startsWith('/trpc')) {
        return trpcHandler(c.req.raw);
    }
    return next();
});

// Serve static assets dari folder client/dist/assets
app.use('/assets/*', serveStatic({
    getContent: async (pathReq) => {
        const filePath = path.join(process.cwd(), 'client', 'dist', pathReq)
        try {
            const fileBuffer = await fs.readFile(filePath)
            return new Response(fileBuffer)
        } catch {
            return null
        }
    }
}))

// SPA fallback: serve index.html untuk semua route lain
app.use('*', serveStatic({
    getContent: async () => {
        const indexPath = path.join(process.cwd(), 'client', 'dist', 'index.html')
        try {
            const fileBuffer = await fs.readFile(indexPath)
            return new Response(fileBuffer, {
                headers: { 'Content-Type': 'text/html' }
            })
        } catch {
            return new Response('Not found', { status: 404 })
        }
    }
}))

// console.log('🚀 Server is running on http://localhost:5000');
// serve({ fetch: app.fetch, port: 5000 }); // 👈 di sini kamu set port-nya

// export default app;


// 👇 Export Vercel-compatible handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
    const result = await app.fetch(req as any, {
        method: req.method,
        headers: req.headers as any,
        body: req.body as any,
    })

    // Send response
    res.status(result.status)
    result.headers.forEach((value, key) => {
        res.setHeader(key, value)
    })
    const body = await result.text()
    res.end(body)
}