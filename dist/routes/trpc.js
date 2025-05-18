"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("@trpc/server/adapters/fetch");
const index_js_1 = require("../trpc/router/index.js");
exports.default = (req) => (0, fetch_1.fetchRequestHandler)({
    endpoint: '/trpc',
    req,
    router: index_js_1.appRouter,
    createContext: () => ({}),
});
//# sourceMappingURL=trpc.js.map