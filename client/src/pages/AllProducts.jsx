import ProductCard from "../components/ProductCard";

function AllProducts() {
    return (
        <div className="min-h-screen bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className="text-sm text-gray-600 mb-6">
                    <span>Home</span> <span className="mx-2">/</span> <span className="text-neutral-900 font-medium">Collections</span>
                </nav>

                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-2">All Collections</h2>
                    <p className="text-gray-600">Discover AI-powered fashion with virtual try-on</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-3xl shadow-md p-6 sticky top-6">
                            <h3 className="text-lg font-bold text-neutral-900 mb-6">Filters</h3>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-neutral-900 mb-3">Category</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                                        <span className="ml-2 text-sm text-gray-700">Dresses</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                                        <span className="ml-2 text-sm text-gray-700">Tops</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                                        <span className="ml-2 text-sm text-gray-700">Bottoms</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                                        <span className="ml-2 text-sm text-gray-700">Outerwear</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-neutral-900 mb-3">Size</h4>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">XS</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">S</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">M</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">L</button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">XL</button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-neutral-900 mb-3">Price Range</h4>
                                <input type="range" min="0" max="500" className="w-full accent-violet-600" />
                                <div className="flex justify-between text-xs text-gray-600 mt-2">
                                    <span>$0</span>
                                    <span>$500</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-neutral-900 mb-3">Color</h4>
                                <div className="flex flex-wrap gap-2">
                                    <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-violet-600 transition-colors"></button>
                                    <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-violet-600 transition-colors"></button>
                                    <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 hover:border-violet-600 transition-colors"></button>
                                    <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 hover:border-violet-600 transition-colors"></button>
                                    <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-300 hover:border-violet-600 transition-colors"></button>
                                    <button className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-300 hover:border-violet-600 transition-colors"></button>
                                </div>
                            </div>

                            <button className="w-full py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors">
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    <main className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">Showing 24 products</p>
                            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-600">
                                <option>Most Popular</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>

                        <div className="flex justify-center items-center gap-2 mt-12">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm">1</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">2</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">3</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-violet-600 hover:text-violet-600 transition-colors">
                                Next
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;