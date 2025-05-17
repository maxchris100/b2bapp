import { serve } from "bun";
import { serveStatic } from "hono/serve-static";
import app from "server";

// Serve static assets (seperti /assets/logo.png)
app.use('/assets/*', serveStatic({
    getContent: async (path) => {
        const file = Bun.file(`client/dist/${path}`)
        return new Response(file) // ✅ wrap Bun.file in Response
    }
}))

// Serve index.html for SPA fallback
app.use('*', serveStatic({
    getContent: async () => {
        const file = Bun.file('client/dist/index.html')
        return new Response(file) // ✅ same here
    }
}))

console.log('🚀 Server is running on http://localhost:5000');
serve({ fetch: app.fetch, port: 5000 }); // 👈 di sini kamu set port-nya