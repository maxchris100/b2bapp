import { useParams } from "react-router-dom";
import { trpc } from "../utils/trpc";
import { formatRupiah } from "../utils/format";
import { useState } from "react";

export default function ProductDetail() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const {
        data: product,
        isLoading,
        isError,
        error,
    } = trpc.product.getById.useQuery(id ?? "", {
        enabled: !!id,
    });
    const descrip = ``
    // Dummy related products (could be fetched from API too)
    const relatedProducts = [
        { id: "p2", name: "Produk Related 1", price: 120000, imageUrl: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1563978058452/5e7d8216d3a308bec15183d45422efcd.jpg" },
        { id: "p3", name: "Produk Related 2", price: 90000, imageUrl: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1563978058452/5e7d8216d3a308bec15183d45422efcd.jpg" },
        { id: "p4", name: "Produk Related 4", price: 80000, imageUrl: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1563978058452/5e7d8216d3a308bec15183d45422efcd.jpg" },
        { id: "p5", name: "Produk Related 5", price: 90000, imageUrl: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1563978058452/5e7d8216d3a308bec15183d45422efcd.jpg" },
    ];

    function onAddToCart() {
        // Simulate add to cart
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    }

    if (isLoading)
        return (
            <div className="max-w-4xl mx-auto p-6 animate-pulse">
                <div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded mb-6 w-1/4"></div>
                <div className="h-72 bg-gray-300 rounded mb-6"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-12 bg-gray-300 rounded"></div>
            </div>
        );

    if (isError)
        return (
            <div className="max-w-4xl mx-auto p-6 text-red-600">
                Error: {error?.message || "Failed to load product"}
            </div>
        );

    if (!product) return <div className="max-w-4xl mx-auto p-6">Product not found</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Image */}
            <div className="col-span-1">
                {product.imageUrl ? (
                    <img
                        src={"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1563978058452/5e7d8216d3a308bec15183d45422efcd.jpg"}
                        alt={product.name}
                        className="w-full h-auto rounded shadow"
                    />
                ) : (
                    <div className="w-full h-72 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                        No Image
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="col-span-2 flex flex-col">
                <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
                <p className="text-xl text-green-700 mb-4 font-bold">
                    {formatRupiah(product.price)}
                </p>
                <p className="text-gray-700 mb-4 whitespace-pre-line">{product.description}</p>
                <div className="flex items-center gap-4 mb-6">
                    <label htmlFor="quantity" className="font-medium">
                        Quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        min={1}
                        max={product.stockQuantity}
                        value={quantity}
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val >= 1 && val <= product.stockQuantity) setQuantity(val);
                        }}
                        className="w-20 border border-gray-300 rounded px-2 py-1"
                    />
                    <span className="text-sm text-gray-500">
                        Stock available: {product.stockQuantity}
                    </span>
                </div>

                <button
                    onClick={onAddToCart}
                    disabled={quantity < product.minimumOrderQuantity}
                    className={`px-6 py-3 rounded text-white font-semibold transition-colors ${quantity >= product.minimumOrderQuantity
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                    title={
                        quantity < product.minimumOrderQuantity
                            ? `Minimum order is ${product.minimumOrderQuantity}`
                            : "Add to cart"
                    }
                >
                    {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </button>


                <div style={{ whiteSpace: "pre-line" }} className="p-4">
                    {`Detail Deskripsi:\n
                    🔲 Layar: 6.3" Super Retina XDR OLED, ProMotion 120Hz\n
                    ⚡ Prosesor: Chip Apple A18 Pro dengan Neural Engine\n
                    📸 Kamera Belakang: Dual 48MP (Wide + Ultra Wide), Deep Fusion, Night Mode\n
                    🤳 Kamera Depan: 12MP TrueDepth, Face ID, Cinematic Mode\n
                    💾 Penyimpanan: 256GB NVMe\n
                    🔋 Baterai: All-day battery life, fast charging 50% in 30 minutes\n
                    📶 Konektivitas: 5G, Wi-Fi 6E, Bluetooth 5.3, NFC\n
                    🌈 Warna Tersedia: Midnight Black, Starlight White, Alpine Blue, Product Red\n
                    📱 iOS 18: Dengan fitur AI cerdas & privasi terbaik di kelasnya\n\n

                    Keunggulan iPhone 16:\n
                    Teknologi Dynamic Island terbaru untuk multitasking lebih interaktif\n
                    Material Titanium Grade 5 yang lebih ringan dan kokoh\n
                    Dukungan Spatial Video Recording dan AR Ready\n
                    USB-C dengan transfer data super cepat\n
                    Sertifikasi IP68 tahan air & debu\n\n

                    Garansi & Dukungan:\n
                    ✅ Garansi Resmi Apple Indonesia – 1 Tahun\n
                    ✅ Support AppleCare+ (opsional)\n
                    ✅ Tersedia cicilan 0% dan pengiriman gratis\n

                    Harga:\n
                    Rp 21.999.000\n

                    🚚 Siap Kirim Hari Ini!\n
                    📦 Stok terbatas! Order sekarang dan dapatkan pengiriman cepat ke seluruh Indonesia.`}
                </div>
                {/* Related Products */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {relatedProducts.map((rel) => (
                            <div
                                key={rel.id}
                                className="border rounded p-2 hover:shadow-md cursor-pointer"
                                onClick={() => alert(`Navigate to product ${rel.id}`)}
                            >
                                <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">
                                    {rel.imageUrl ? (
                                        <img
                                            src={rel.imageUrl}
                                            alt={rel.name}
                                            className="max-h-20"
                                        />
                                    ) : (
                                        <span className="text-gray-400">No Image</span>
                                    )}
                                </div>
                                <div className="font-semibold text-sm">{rel.name}</div>
                                <div className="text-xs text-green-600">{formatRupiah(rel.price)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
