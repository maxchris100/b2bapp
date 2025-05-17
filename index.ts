// import { serve } from "bun";
import { serveStatic } from "hono/serve-static";
import app from "server";
import path from 'path'
import fs from 'fs/promises'

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

export default app;