// import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../trpc/router/index.js';
// export default (req: Request) =>
//     fetchRequestHandler({
//         endpoint: '/trpc',
//         req,
//         router: appRouter,
//         createContext: () => ({}),
//     });
import { createHTTPHandler } from '@trpc/server/adapters/standalone'; // atau dari hono adapter jika kamu pakai itu
// import { appRouter } from './trpc/router'; // path ke router kamu
// import { createContext } from './trpc/context'; // kalau ada context
const trpcHandler = createHTTPHandler({
    router: appRouter
    // createContext,
});
export default trpcHandler;
