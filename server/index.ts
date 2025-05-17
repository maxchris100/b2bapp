import { Hono } from 'hono';
import trpcHandler from './routes/trpc';
import { cors } from 'hono/cors';

const app = new Hono();


app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from frontend
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

export default app;

