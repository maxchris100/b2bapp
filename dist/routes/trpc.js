import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../trpc/router/index.js';
export default (req) => fetchRequestHandler({
    endpoint: '/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
});
