// src/components/AllProducts.jsx
import React, { useState } from "react";

const productsData = [
    {
        id: 1,
        name: "Floral Summer Maxi Dress",
        category: "Women > Dresses",
        sku: "LBS-WN-0042",
        price: 2499,
        stock: 45,
        stockStatus: "green",
        status: "Published",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcLRKsy5HAzPlxPR64iEaP246R3BHcrVEfXk8sWppIGth6rjK1qjIYy9k08r3v4sH_WWaF5i7N5qSr2CUTm376m4-yCp2JJS5H0sWA1-K6qQSxVDeA6RuXTtOAvwPNAVEYaaMjASLPlbX1-TqCpunZeETlocHWaTSLwC4t6U_qMwglB_1hu042LwLPahLiCNmHkNBQzvcFhDs6QyiCVaRw3ngx1iTHbzWRmyZ3hMHmwZttkiHowmUfQJ8zBAuv-wDsPlsE16pmj2x"
    },
    {
        id: 2,
        name: "Classic White Cotton Shirt",
        category: "Men > Shirts",
        sku: "LBS-MN-0012",
        price: 1299,
        stock: 120,
        stockStatus: "green",
        status: "Published",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyUdqFTxl-RE16k0D_8a2mdIqX6Eu1KC2abZU8UzYjMRKGQ85sUJYuDZjvyElw51kwgFZGxKIkLNV7ZuQPZH-V21V5yZr4yKXFrYKTTNPau9FXGqJJVEhme-bUPP7HCr-hY7tjDe-XRHbijxCMC5mCFPnf2D6Uzz1Ro5fmLEyGeUTZWikTKgAB_aRJvpxKR7i6LG7YWerk2m5KOq100RLEsvVUVQQ-W9QqA9gMXT46D0gVDVw4aeIiffjj5iFwAPQFv_vjNyuUpkGp"
    },
    {
        id: 3,
        name: "Slim Fit Beige Chinos",
        category: "Men > Trousers",
        sku: "LBS-MN-0034",
        price: 1899,
        stock: 8,
        stockStatus: "orange",
        status: "Published",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOVnLeGSowLMNKnFZiaijkNlG5koGnHbvNi0v60FIgmC6Xu7xFrPrEH8Md6OIdyt05kSJ39xcGy6WfZ--vmzL6lFS8QmHjLapWS3yjgwYfiZWRZB4_-9LVx4zYk27AL5cKvN-ZUyJrqqzlwdgleiG8A_aRyKtuzosvgV6TYU9OETK9bx6skDg6rfCuPIMwT98sKiE1wB4AQVA3g_DeFC9X93vPYv80QWEtsSWR7oG9n4sQre4vUdbHVRqcVokv6xDH2nU2lnprdIsq"
    },
    {
        id: 4,
        name: "Premium Leather Handbag",
        category: "Accessories > Bags",
        sku: "LBS-AC-0089",
        price: 4500,
        stock: 0,
        stockStatus: "red",
        status: "Draft",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFN1WL-7d4BAXScIj1qNtlXDTSDpt4XynMoCMMURKc3rj_ZL3buSY0_kpvM5_CR392ZQEolLbrhdRvaw7HYz88dGR55R__Do1atxc28v7JptFEHr_9segrCYpnwD9aYC8vVNtl5_KuDC086EE7sZUsr2B_PPWV9KB_AXrTk5-aTQQtu6DIdzdAnSEp09L4JKhYfaVwGakoxyzDg84kARI9TDP0gEJ00JVTDBGcBNLgGd5rzHMo_LnwOFnvkfaaFoaF3lp_-XXDwsJ"
    },
    {
        id: 5,
        name: "Silk Patterned Scarf",
        category: "Accessories > Scarves",
        sku: "LBS-AC-0022",
        price: 899,
        stock: 200,
        stockStatus: "green",
        status: "Published",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMz6TiCnEc_RmUAEYSf-22xUxjwmPNXt4ZvEr4Q_8NITUGsEfbjzV9MED1DG4MwGHp24sGahbancDu8pK0M4WMBeRAy038C_YdW-NVgIRaCb2oRN28DzlrzOJ4HG8tvqylc_hqTRM7pQXrs5WIzLokPHO2g4kFlL0A48r-gFE0ihDkVLu6pnY8sz8TM31rADwobugbFPVSudPvE3K01fDaHSfZudeqJEb2KIDPEeQQr69C7kyN5PBV6_qew-XPsjbMzCSIF4DNrrCk"
    }
];

const AllProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const productsPerPage = 3;

    // Filtered products by search
    const filteredProducts = productsData.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-full flex-shrink-0 p-4">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <nav className="flex flex-col gap-2">
                    <button className="text-left p-2 rounded hover:bg-gray-100">Dashboard</button>
                    <button className="text-left p-2 rounded hover:bg-gray-100">Products</button>
                    <button className="text-left p-2 rounded hover:bg-gray-100">Orders</button>
                    <button className="text-left p-2 rounded hover:bg-gray-100">Settings</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">All Products</h1>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border px-3 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
                        {/* Data Table */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50/50 border-b border-gray-100">
                                            <th className="p-4 pl-6 w-12"><input type="checkbox" className="h-4 w-4 rounded border-gray-300" /></th>
                                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Product</th>
                                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">SKU</th>
                                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Price</th>
                                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Stock</th>
                                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {currentProducts.map(product => (
                                            <tr key={product.id} className="group hover:bg-gray-50 transition-colors">
                                                <td className="p-4 pl-6"><input type="checkbox" className="h-4 w-4 rounded border-gray-300" /></td>
                                                <td className="p-4 flex items-center gap-3">
                                                    <img src={product.img} alt={product.name} className="h-12 w-12 object-cover rounded-lg border" />
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold">{product.name}</span>
                                                        <span className="text-xs text-gray-500">{product.category}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4"><span className="text-sm font-mono bg-gray-50 px-2 py-1 rounded">{product.sku}</span></td>
                                                <td className="p-4">₹{product.price}</td>
                                                <td className="p-4 flex items-center gap-2">
                                                    <div className={`h-2 w-2 rounded-full ${product.stockStatus === "green" ? "bg-green-500" :
                                                            product.stockStatus === "orange" ? "bg-orange-400" : "bg-red-500"
                                                        }`}></div>
                                                    <span className={`text-sm font-medium ${product.stockStatus === "orange" ? "text-orange-600" :
                                                            product.stockStatus === "red" ? "text-red-600" : ""
                                                        }`}>
                                                        {product.stock} {product.stockStatus === "red" ? "(Out)" : product.stockStatus === "orange" ? "(Low)" : ""}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${product.status === "Published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                                                        }`}>{product.status}</span>
                                                </td>
                                                <td className="p-4 text-right flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 rounded hover:bg-gray-100"><span className="material-symbols-outlined">edit</span></button>
                                                    <button className="p-1.5 rounded hover:bg-red-50 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between p-4 border-t border-gray-100 bg-white">
                                <div className="text-sm text-gray-500">
                                    Showing <span className="font-medium">{(currentPage - 1) * productsPerPage + 1}</span> - <span className="font-medium">{Math.min(currentPage * productsPerPage, filteredProducts.length)}</span> of <span className="font-medium">{filteredProducts.length}</span> products
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-2 py-1 border rounded disabled:opacity-50"
                                    >Prev</button>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-2 py-1 border rounded ${currentPage === page ? "bg-gray-200" : ""}`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-2 py-1 border rounded disabled:opacity-50"
                                    >Next</button>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <footer className="text-center py-4 text-gray-500">
                            &copy; 2025 LibasMitr. All rights reserved.
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AllProducts;
