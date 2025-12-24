
import { Plus, Ban } from "lucide-react";
import Layout from "../components/Admin/Layout";

const Coupons=()=>{
    return (
        <Layout>
            <div className="space-y-8">
                {/* Create Coupon Card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">
                            Create Coupon
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Coupon Code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. SUMMER2024"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Discount Percentage
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Minimum Order Amount
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="px-6 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Create Coupon
                            </button>
                        </form>
                    </div>
                </div>

                {/* Coupons Table */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-900">
                            All Coupons
                        </h3>
                        <input
                            type="search"
                            placeholder="Search coupons..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="table-head">Code</th>
                                    <th className="table-head">Discount</th>
                                    <th className="table-head">Min Order</th>
                                    <th className="table-head">Expiry</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {[
                                    ["SUMMER2024", "25%", "$100", "2024-08-31", "Active"],
                                    ["NEWYEAR15", "15%", "$50", "2024-02-15", "Expired"],
                                    ["WELCOME10", "10%", "$0", "2024-12-31", "Active"],
                                    ["FLASH50", "50%", "$200", "2024-03-01", "Active"],
                                ].map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-semibold">
                                            {item[0]}
                                        </td>
                                        <td className="px-6 py-4">{item[1]}</td>
                                        <td className="px-6 py-4">{item[2]}</td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {item[3]}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 text-xs font-semibold rounded-full ${item[4] === "Active"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                    }`}
                                            >
                                                {item[4]}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2">
                                                <Ban className="w-4 h-4" />
                                                Disable
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-6 border-t border-gray-200 flex justify-between">
                        <p className="text-sm text-gray-600">
                            Showing 1 to 4 of 32 coupons
                        </p>
                        <div className="flex gap-2">
                            <button className="btn-secondary">Previous</button>
                            <button className="btn-primary">1</button>
                            <button className="btn-secondary">2</button>
                            <button className="btn-secondary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Coupons;
