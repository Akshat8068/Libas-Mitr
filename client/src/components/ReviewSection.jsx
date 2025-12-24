import React from "react";


const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Ananya K.",
            initials: "AK",
            rating: 5,
            title: "Absolutely stunning!",
            text: "The velvet quality is top-notch and the embroidery looks even better in person. The virtual try-on feature helped me pick the right size.",
            time: "2 days ago",
            avatarBg: "bg-[#044343]-500",
        },
        {
            id: 2,
            name: "Sia M.",
            initials: "SM",
            rating: 4,
            title: "Great fit, slightly heavy",
            text: "The fit is perfect (Size M). It is a bit heavy due to the velvet and work, but manageable for an event.",
            time: "1 week ago",
            avatarBg: "bg-[#044343]",
        },
    ];

    return (
        <section className="border-t border-gray-200 pt-16 pb-20">
            <div className="flex flex-col md:flex-row gap-12">

                {/* LEFT SUMMARY */}
                <div className="w-full md:w-1/3">
                    <h2 className="text-2xl font-serif font-bold mb-4">
                        Customer Reviews
                    </h2>

                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-5xl font-bold">4.8</span>

                        <div>
                            <div className="flex text-amber-400">
                                {[1, 2, 3, 4].map((i) => (
                                    <span
                                        key={i}
                                        className="material-symbols-outlined"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        star
                                    </span>
                                ))}
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    star_half
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Based on 124 reviews
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT REVIEWS */}
                <div className="w-full md:w-2/3 space-y-8">

                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="border-b border-gray-100 pb-8 transition-all duration-300"
                        >
                            {/* HEADER */}
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`size-8 rounded-full text-white flex items-center justify-center text-xs font-bold ${review.avatarBg}`}
                                    >
                                        {review.initials}
                                    </div>
                                    <span className="font-bold text-sm">
                                        {review.name}
                                    </span>
                                </div>
                                <span className="text-xs text-gray-400">
                                    {review.time}
                                </span>
                            </div>

                            {/* STARS */}
                            <div className="flex text-amber-400 text-sm mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`material-symbols-outlined text-base ${i < review.rating ? "" : "text-gray-300"
                                            }`}
                                        style={{
                                            fontVariationSettings:
                                                i < review.rating ? "'FILL' 1" : "'FILL' 0",
                                        }}
                                    >
                                        star
                                    </span>
                                ))}
                            </div>

                            {/* TEXT */}
                            <h4 className="font-bold text-sm mb-1">
                                {review.title}
                            </h4>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {review.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
