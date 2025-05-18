import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.product.createMany({
        data: [
            {
                sku: 'SKU001',
                slug: 'iphone-12-used',
                name: 'Apple iPhone 12 (Used)',
                description: '128GB, good condition, battery health 85%',
                price: 350.00,
                imageUrl: 'https://example.com/iphone12.jpg',
                stockQuantity: 5,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU002',
                slug: 'samsung-galaxy-s21-used',
                name: 'Samsung Galaxy S21 (Used)',
                description: '256GB, excellent condition, original charger included',
                price: 300.00,
                imageUrl: 'https://example.com/s21.jpg',
                stockQuantity: 3,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU003',
                slug: 'xiaomi-mi-11-used',
                name: 'Xiaomi Mi 11 (Used)',
                description: '128GB, minor scratches, 90% battery health',
                price: 220.00,
                imageUrl: 'https://example.com/mi11.jpg',
                stockQuantity: 4,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU004',
                slug: 'oppo-reno-6-used',
                name: 'OPPO Reno 6 (Used)',
                description: '8GB RAM, 128GB ROM, smooth performance',
                price: 190.00,
                imageUrl: 'https://example.com/reno6.jpg',
                stockQuantity: 6,
                minimumOrderQuantity: 2,
            },
            {
                sku: 'SKU005',
                slug: 'vivo-v21-used',
                name: 'Vivo V21 (Used)',
                description: '5G supported, like new, 128GB',
                price: 200.00,
                imageUrl: 'https://example.com/v21.jpg',
                stockQuantity: 2,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU006',
                slug: 'realme-8-used',
                name: 'Realme 8 (Used)',
                description: 'Gaming ready, AMOLED display, 128GB',
                price: 160.00,
                imageUrl: 'https://example.com/realme8.jpg',
                stockQuantity: 7,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU007',
                slug: 'google-pixel-5-used',
                name: 'Google Pixel 5 (Used)',
                description: 'Stock Android, wireless charging, 128GB',
                price: 280.00,
                imageUrl: 'https://example.com/pixel5.jpg',
                stockQuantity: 3,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU008',
                slug: 'oneplus-8t-used',
                name: 'OnePlus 8T (Used)',
                description: 'Fast charging, 12GB RAM, clean condition',
                price: 250.00,
                imageUrl: 'https://example.com/8t.jpg',
                stockQuantity: 4,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU009',
                slug: 'asus-rog-phone-3-used',
                name: 'Asus ROG Phone 3 (Used)',
                description: 'Gaming beast, RGB back, 256GB',
                price: 320.00,
                imageUrl: 'https://example.com/rog3.jpg',
                stockQuantity: 2,
                minimumOrderQuantity: 1,
            },
            {
                sku: 'SKU010',
                slug: 'nokia-x20-used',
                name: 'Nokia X20 (Used)',
                description: 'Durable build, long battery, 128GB',
                price: 150.00,
                imageUrl: 'https://example.com/x20.jpg',
                stockQuantity: 5,
                minimumOrderQuantity: 1,
            },
        ],
    });
    console.log('✅ Seed berhasil ditambahkan');
}
main()
    .then(() => prisma.$disconnect())
    .catch((err) => {
    console.error(err);
    return prisma.$disconnect();
});
