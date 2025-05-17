import { z } from 'zod';
import { publicProcedure, router } from '..';
import { prisma } from '@prisma';
import moment from 'moment';

export const productRouter = router({
    getAll: publicProcedure.query(async () => {
        const data = await prisma.product.findMany();
        return data.map(product => ({
            ...product,
            createdAt: moment(product.createdAt).format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: moment(product.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
        }));
    }),
    getById: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return await prisma.product.findUnique({ where: { id: input } });
        }),
    // POST: buat produk
    create: publicProcedure
        .input(z.object({
            sku: z.string(),
            slug: z.string(),
            name: z.string(),
            description: z.string(),
            price: z.number(),
            imageUrl: z.string().url().optional(),
            stockQuantity: z.number(),
            minimumOrderQuantity: z.number(),
        }))
        .mutation(async ({ input }) => {
            return await prisma.product.create({ data: input });
        }),

    // PUT: update produk
    update: publicProcedure
        .input(z.object({
            id: z.string(),
            sku: z.string(),
            slug: z.string(),
            name: z.string(),
            description: z.string(),
            price: z.number(),
            imageUrl: z.string().url().optional(),
            stockQuantity: z.number(),
            minimumOrderQuantity: z.number(),
        }))
        .mutation(async ({ input }) => {
            const { id, ...data } = input;
            return await prisma.product.update({
                where: { id },
                data,
            });
        }),

    // DELETE: hapus produk
    delete: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ input }) => {
            return await prisma.product.delete({
                where: { id: input.id },
            });
        }),
});