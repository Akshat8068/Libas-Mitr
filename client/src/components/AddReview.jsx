import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductReview } from "../features/products/productSlice";
import { toast } from "react-toastify";

export function AddReviewForm({ pid }) {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);

    const dispatch = useDispatch();
    const { productIsLoading, productIsSuccess, productIsError, productIsErrorMessage } = useSelector(state => state.product);

    useEffect(() => {
        
        if (productIsError && productIsErrorMessage) {
            toast.error(productIsErrorMessage, { position: "top-center" });
        }
    }, [productIsSuccess, productIsError, productIsErrorMessage]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) {
            toast.warning("Please write your review", { position: "top-center" });
            return;
        }

        dispatch(addProductReview({
            _id: pid,
            text: text.trim(),
            rating
        }));

        // Reset form
        setText("");
        setRating(5);
    };

    return (
        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm my-12">
            <div className="mb-8 space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    Add Your Review
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                    Help others find the perfect style.
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        Star Rating
                    </label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                type="button"
                                className={`${rating >= star || hoverRating >= star
                                        ? "bg-yellow-100"
                                        : "bg-slate-50"
                                    } group flex h-12 w-12 items-center justify-center rounded-xl transition-all hover:bg-yellow-50 hover:scale-110 active:scale-95`}
                            >
                                <Star
                                    className={`${rating >= star || hoverRating >= star
                                            ? "text-yellow-500 fill-yellow-400"
                                            : "text-slate-300"
                                        } h-6 w-6 transition-colors`}
                                />
                            </button>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600">
                        You selected: <span className="font-bold">{rating} star{rating !== 1 ? 's' : ''}</span>
                    </p>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400"
                    >
                        Your Experience
                    </label>
                    <textarea
                        id="message"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={4}
                        placeholder="Tell us about the fabric, fit, and feel..."
                        className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                        required
                    />
                    <p className="text-xs text-slate-400">
                        {text.length} characters
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={productIsLoading || !text.trim()}
                    className={`w-full rounded-2xl py-4 text-sm font-bold text-white transition-all ${productIsLoading || !text.trim()
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98]"
                        }`}
                >
                    {productIsLoading ? "Submitting..." : "Submit Review"}
                </button>
            </form>
        </section>
    );
}