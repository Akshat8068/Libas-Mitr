// src/pages/Reviews.tsx
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { Loader, Star, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllReviews } from '../../features/admin/adminSlice';
import { useEffect } from 'react';

const AdminReviews = () => {
    const { user } = useSelector(state => state.auth)
    const { adminIsLoading, adminIsSuccess, adminIsError, adminErrorMessage, allReviews } = useSelector(state => state.admin)

    const navigate = useNavigate()
    const dispatch = useDispatch()    
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
        if (!user?.isAdmin) {
            navigate("/admin")
        }
        if (user.isAdmin) {
            dispatch(getAllReviews())
        }
    }, [user])
    useEffect(() => { 
        if (adminIsError && adminErrorMessage) {
            toast.error(adminErrorMessage, { position: 'top-center' })
        }
    }, [adminErrorMessage, adminIsError])
    if (adminIsLoading) {
        return (
            <Loader loadingMessage={"Users Loading...."} />
        )
    }
    return (
        <Layout activeMenu="reviews" pageTitle="Reviews">
            <div className="bg-white rounded-xl shadow-md border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">All Product Reviews</h3>
                        <input
                            type="search"
                            placeholder="Search reviews..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Product Name</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">User</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Comment</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                allReviews.map((review) => {
                                    return (
                                        <tr key={review._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{review.product.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{review.user.name}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1">
                                                    <span className="ml-2 text-sm font-semibold text-gray-900">{review.rating}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                                {review.text}.
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{new Date(review.createdAt).toLocaleDateString('en-IN')}</td>
                                            
                                        </tr>
                                    )
                                })
                        }
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Showing 1 to 8 of 1,892 reviews</p>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            Previous
                        </button>
                        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors">
                            1
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            2
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            3
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AdminReviews