export declare const appRouter: import("@trpc/server/dist/unstable-core-do-not-import").BuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/dist/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    product: import("@trpc/server/dist/unstable-core-do-not-import").BuiltRouter<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape;
        transformer: false;
    }, import("@trpc/server/dist/unstable-core-do-not-import").DecorateCreateRouterOptions<{
        getAll: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                name: string;
                id: string;
                sku: string;
                slug: string;
                description: string;
                price: number;
                imageUrl: string | null;
                stockQuantity: number | null;
                minimumOrderQuantity: number | null;
                createdAt: Date;
                updatedAt: Date;
            }[];
        }>;
        getById: import("@trpc/server").TRPCQueryProcedure<{
            input: string;
            output: {
                name: string;
                id: string;
                sku: string;
                slug: string;
                description: string;
                price: number;
                imageUrl: string | null;
                stockQuantity: number | null;
                minimumOrderQuantity: number | null;
                createdAt: Date;
                updatedAt: Date;
            };
        }>;
    }>>;
}>>;
export type AppRouter = typeof appRouter;
