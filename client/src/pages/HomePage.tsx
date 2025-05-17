
import { trpc } from '../utils/trpc.tsx';


const HomePage = () => {
    // Memanggil query 'product.GetAll' menggunakan TRPC Client
    const { data: products, isLoading, isError } = trpc.product.getAll.useQuery();
    const categories = ["Phone", "Tablet"];

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (

        (
            <div className="bg-gray-100 min-h-screen">

                {/* Categories Section */}
                <section className="container mx-auto py-6">
                    <div className="flex space-x-4 mt-4">
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="p-3 bg-white shadow-lg rounded-lg hover:bg-gray-100 cursor-pointer"
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Product Grid */}
                <section className="container mx-auto py-6">
                    <h2 className="text-xl font-bold">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">

                        {products ? products.map((product: any) => (
                            <a href={`/product/${product.id}`} key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                                <img src={"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1563978058452/5e7d8216d3a308bec15183d45422efcd.jpg"} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                                <h3 className="mt-2 font-semibold">{product.name}</h3>
                                <p className="text-lg text-black">Min Order 1 Unit</p>
                                <p className="text-lg text-black">Rp. {product.price}</p>
                                <div className="flex gap-4 pt-4">
                                    <button className="flex-1 rounded-2xl bg-gray-800 text-white px-6 py-3 text-sm font-medium shadow-md hover:bg-gray-700 transition">
                                        <a>Add to Cart</a>
                                    </button>
                                    <button className="flex-1 rounded-2xl bg-blue-600 text-white px-6 py-3 text-sm font-medium shadow-md hover:bg-blue-500 transition">
                                        <a>Chat Now</a>
                                    </button>
                                </div>
                            </a>
                        )) : ""}
                    </div>
                </section>
            </div>
        )
    );
};

export default HomePage;
