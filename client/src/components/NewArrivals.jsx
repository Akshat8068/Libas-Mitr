import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import { Link } from "react-router-dom";



const NewArrivals = () => {
    const { products, productIsLoading } = useSelector(
        (state) => state.product
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (productIsLoading) {
        return <p className="text-center py-10">Loading...</p>;
    }
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Header */}
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-serif font-bold text-[#111818]">
                        New Arrivals
                    </h2>
                </div>

                {/* Products */}
                <div className="flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 pb-4 snap-x snap-mandatory">
                    {products.map((item) => (
                        <div
                            key={item._id}
                            className="min-w-[220px] sm:min-w-[280px] flex-shrink-0 group snap-center"
                        >
                            <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{
                                        backgroundImage: `url(${item.colors?.[0]?.mainImage})`,
                                    }}
                                />

                                {/* Hover CTA */}
                                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                                    
                                    <Link to={`/products/${item._id}`}>
                                        <button className="w-full bg-white text-[#111818] py-3 rounded-md font-medium text-sm shadow-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white">
                                            Add to Cart
                                        </button>
                                    </Link>
                                </div>

                                <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-xs font-bold rounded">
                                    New
                                </span>
                            </div>

                            <p className="text-xs text-gray-500 font-medium mb-1 truncate">
                                {item.brand}
                            </p>

                            <h3 className="text-base font-medium text-[#111818] truncate">
                                {item.name}
                            </h3>

                            <p className="text-black font-bold mt-1">
                                ₹ {item.salePrice}
                                <span className="line-through text-gray-400 text-sm ml-2">
                                    ₹ {item.originalPrice}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;

