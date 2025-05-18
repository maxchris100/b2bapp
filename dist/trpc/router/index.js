"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const __1 = require("..");
const product_js_1 = require("./product.js");
exports.appRouter = (0, __1.router)({
    product: product_js_1.productRouter,
});
//# sourceMappingURL=index.js.map