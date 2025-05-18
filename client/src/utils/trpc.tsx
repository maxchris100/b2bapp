import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../server/trpc/router/index";

export const trpc = createTRPCReact<AppRouter>();
export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            // url: "http://localhost:5000/trpc", // ganti sesuai backend kamu
            url: "/api"
        }),
    ],
}); 