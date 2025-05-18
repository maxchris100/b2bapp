export declare const productRouter: import("@trpc/server/dist/unstable-core-do-not-import.js").BuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server/dist/unstable-core-do-not-import.js").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/dist/unstable-core-do-not-import.js").DecorateCreateRouterOptions<{
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
