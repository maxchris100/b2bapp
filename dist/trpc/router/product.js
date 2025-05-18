"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const zod_1 = require("zod");
const index_js_1 = require("../index.js");
const index_js_2 = require("../../prisma/index.js");
exports.productRouter = (0, index_js_1.router)({
    getAll: index_js_1.publicProcedure.query(async () => {
        const data = await index_js_2.prisma.product.findMany();
        return data.map(product => ({
            ...product,
        }));
    }),
    getById: index_js_1.publicProcedure
        .input(zod_1.z.string())
        .query(async ({ input }) => {
        return await index_js_2.prisma.product.findUnique({ where: { id: input } });
    }),
});
//# sourceMappingURL=product.js.map