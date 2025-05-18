import { router } from '../index.ts';
import { productRouter } from './product.ts';

export const appRouter = router({
    product: productRouter,
});

export type AppRouter = typeof appRouter;
