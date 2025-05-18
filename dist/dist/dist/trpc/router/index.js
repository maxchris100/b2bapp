import { router } from '..';
import { productRouter } from './product.js';
export const appRouter = router({
    product: productRouter,
});
