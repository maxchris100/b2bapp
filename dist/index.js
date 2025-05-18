import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { handle } from '@hono/node-server/vercel';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { appRouter } from './trpc/router/index.js';
import { trpcServer } from '@hono/trpc-server';
const app = new Hono();
app.use(cors({
    origin: ['http://localhost:3000', 'https://b2bapp-maxchris100s-projects.vercel.app', 'http://b2bapp.vercel.app'], // Allow requests from frontend
    allowMethods: ['GET', 'POST', 'OPTIONS'], // Make sure these methods are allowed
    allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Add more if needed
}));
app.use('*', async (c, next) => {
    console.log(`[${new Date().toISOString()}] ${c.req.method} ${c.req.url}`);
    return next();
});
app.use('/api/*', trpcServer({ router: appRouter }));
app.use('/assets/*', serveStatic({ root: './client/dist' })); // serve CSS/JS
// Serve all static files
app.use('/*', serveStatic({ root: './client/dist' }));
// SPA fallback ke index.html
app.use('*', serveStatic({ path: './client/dist/index.html' }));
// if (process.env.NODE_ENV !== 'vercel') {
console.log('🚀 Server is running on http://localhost:5000');
serve({ fetch: app.fetch, port: 5000 }); // 👈 di sini kamu set port-nya
// }
export default handle(app); // Ensure app is exported as the default export
