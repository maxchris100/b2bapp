import { serve } from '@hono/node-server';
import { serveStatic } from "hono/serve-static";
import path from 'path';
import fs from 'fs/promises';
import { Hono } from 'hono';
import trpcHandler from './routes/trpc.js';
import { cors } from 'hono/cors';
// Required for __dirname in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = new Hono();
// Auto import all routes in server/routes
// const routesPath = path.join(__dirname, 'routes');
// const files = await fs.readdir(routesPath);
// for (const file of files) {
//     if (file.endsWith('.js')) {
//         const { default: handler } = await import(`./routes/${file}`);
//         if (typeof handler === 'function') {
//             handler(app); // handler should be a function that takes app
//         }
//     }
// }
app.use(cors({
    origin: ['http://localhost:3000', 'https://b2bapp-maxchris100s-projects.vercel.app'], // Allow requests from frontend
    allowMethods: ['GET', 'POST', 'OPTIONS'], // Make sure these methods are allowed
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
        const filePath = path.join(process.cwd(), 'client', 'dist', pathReq);
        try {
            const fileBuffer = await fs.readFile(filePath);
            return new Response(fileBuffer);
        }
        catch {
            return null;
        }
    }
}));
// SPA fallback: serve index.html untuk semua route lain
app.use('*', serveStatic({
    getContent: async () => {
        const indexPath = path.join(process.cwd(), 'client', 'dist', 'index.html');
        try {
            const fileBuffer = await fs.readFile(indexPath);
            return new Response(fileBuffer, {
                headers: { 'Content-Type': 'text/html' }
            });
        }
        catch {
            return new Response('Not found', { status: 404 });
        }
    }
}));
console.log('🚀 Server is running on http://localhost:5000');
serve({ fetch: app.fetch, port: 5000 }); // 👈 di sini kamu set port-nya
export default app;
