import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../trpc/router';

export default (req: Request) =>
    fetchRequestHandler({
        endpoint: '/trpc',
        req,
        router: appRouter,
        createContext: () => ({}),
    });