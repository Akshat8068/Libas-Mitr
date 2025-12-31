
import product1 from "../assets/product-01.jpg"
const UserAllProducts=()=> {
    const categories = ["Men (20)", "Women (20)", "Bags (20)", "Clothing (20)", "Shoes (20)", "Accessories (20)", "Kids (20)"];
    const brands = ["Louis Vuitton", "Chanel", "Hermes", "Gucci"];
    const prices = ["$0.00 - $50.00", "$50.00 - $100.00", "$100.00 - $150.00", "$150.00 - $200.00", "$200.00 - $250.00", "250.00+"];
    const sizes = ["XS", "S", "M", "XL", "2XL", "XXL", "3XL", "4XL"];
    const tags = ["Product", "Bags", "Shoes", "Fashion", "Clothing", "Hats", "Accessories"];
    const products = [
        { name: "Piqué Biker Jacket", price: "$67.24", rating: 0, colors: ["black", "grey"], img: product1, sale: false },
        { name: "Multi-pocket Chest Bag", price: "$43.48", rating: 4, colors: ["black", "grey"], img: product1, sale: true },
        { name: "Diagonal Textured Cap", price: "$60.90", rating: 0, colors: ["black", "grey"], img: product1, sale: false },
        { name: "Ankle Boots", price: "$98.49", rating: 4, colors: ["black", "grey"], img: product1, sale: true },
        // Add more products as needed
    ];

    return (
        <section className="bg-gray-50 py-20">
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
                <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                    <a href="/" className="hover:text-gray-900 transition">Home</a>
                    <span>/</span>
                    <span className="text-gray-900">Shop</span>
                </div>
                <h2 className="text-3xl font-semibold mt-2">Shop</h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-12 gap-6">
                {/* Sidebar */}
                <aside className="col-span-12 lg:col-span-3 mr-3 space-y-6">
                    {/* Search */}
                    <div className="bg-white p-4 rounded shadow">
                        <form className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-900"
                            />
                            
                        </form>
                    </div>

                    {/* Categories */}
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold mb-3 cursor-pointer">Categories</h3>
                        <ul className="space-y-1 text-gray-700">
                            {categories.map((cat, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-gray-900 transition">{cat}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Branding */}
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold mb-3 cursor-pointer">Branding</h3>
                        <ul className="space-y-1 text-gray-700">
                            {brands.map((brand, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-gray-900 transition">{brand}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold mb-3 cursor-pointer">Filter Price</h3>
                        <ul className="space-y-1 text-gray-700">
                            {prices.map((price, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-gray-900 transition">{price}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Size */}
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold mb-3 cursor-pointer">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((size, i) => (
                                <label key={i} className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="size" className="accent-gray-900" />
                                    {size}
                                </label>
                            ))}
                        </div>
                    </div>


                    {/* Tags */}
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold mb-3 cursor-pointer">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-sm  px-2 py-1 rounded hover:bg-gray-300 transition"
                                >
                                    {tag}
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
                {/* Main Product Grid */}
                <main className="col-span-12 lg:col-span-9 space-y-6">
                    {/* Sort & Result Info */}
                    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded shadow">
                        <p className="text-gray-700 mb-2 md:mb-0">Showing 1–12 of 126 results</p>
                        <div className="flex items-center gap-2">
                            <label className="text-gray-700">Sort by Price:</label>
                            <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-900">
                                <option value="">Low To High</option>
                                <option value="">$0 - $55</option>
                                <option value="">$55 - $100</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, i) => (
                            <div key={i} className={`bg-white rounded shadow overflow-hidden relative group p-b-8 isotope-item ${product.category || "women"}`}>
                                <div className="bg-white rounded shadow overflow-hidden relative group">
                                    {/* Product Image */}
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-72 object-cover transform group-hover:scale-105 transition"
                                    />

                                    {/* Add to Cart Button */}
                                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                                        <button className="w-full bg-white text-[#111818] py-3 rounded-md font-medium text-sm shadow-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white">
                                            Add to Cart
                                        </button>
                                    </div>

                                    {/* Product Info */}
                                </div>
                                    <div className="flex justify-between items-start p-4">
                                        <div>
                                            <a
                                                href="#"
                                                className="block text-gray-900 font-medium hover:text-gray-700 transition"
                                            >
                                                {product.name}
                                            </a>
                                            <span className="block text-gray-600 mt-1">{product.price}</span>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>



                    {/* Pagination */}
                    <div className="flex justify-center gap-2 mt-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`px-3 py-1 rounded ${i === 0 ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"} hover:bg-gray-300 transition`}
                            >
                                {i + 1}
                            </a>
                        ))}
                        <span className="px-3 py-1">...</span>
                        <a href="#" className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition">21</a>
                    </div>
                </main>
            </div>
        </section>
    );
}
export default UserAllProducts