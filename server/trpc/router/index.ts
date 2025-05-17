import { router } from '..';
import { productRouter } from './product';

export const appRouter = router({
    product: productRouter,
});

export type AppRouter = typeof appRouter;
