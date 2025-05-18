import { router } from '../index.js';
import { productRouter } from './product.js';
export const appRouter = router({
    product: productRouter,
});
