"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const serve_static_1 = require("@hono/node-server/serve-static");
const hono_1 = require("hono");
const trpc_js_1 = require("./routes/trpc.js");
const cors_1 = require("hono/cors");
const app = new hono_1.Hono();
app.use((0, cors_1.cors)({
    origin: ['http://localhost:3000', 'https://b2bapp-maxchris100s-projects.vercel.app'],
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));
app.use('/trpc/*', async (c, next) => {
    const url = new URL(c.req.url);
    if (url.pathname.startsWith('/trpc')) {
        return (0, trpc_js_1.default)(c.req.raw);
    }
    return next();
});
app.use('/*', (0, serve_static_1.serveStatic)({ root: './client/dist' }));
app.use('*', (0, serve_static_1.serveStatic)({ path: './client/dist/index.html' }));
console.log('🚀 Server is running on http://localhost:5000');
(0, node_server_1.serve)({ fetch: app.fetch, port: 5000 });
exports.default = app;
//# sourceMappingURL=index.js.map