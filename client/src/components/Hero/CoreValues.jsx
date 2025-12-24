import React from "react";
import { Shirt, Eye, Globe } from "lucide-react"; // Lucide icons

const FeaturesSection = () => {
    const features = [
        {
            title: "Curated Luxury",
            description:
                "We hand-pick only the finest fabrics and designs. Quality isn't an option; it's our baseline standard for every piece.",
            icon: <Shirt className="w-7 h-7 text-primary" />,
        },
        {
            title: "Tech-First",
            description:
                "We embrace technology not as a gimmick, but as a tool to enhance your shopping experience and reduce returns.",
            icon: <Eye className="w-7 h-7 text-primary" />,
        },
        {
            title: "Sustainability",
            description:
                "By reducing returns through better sizing tech and supporting local artisans, we aim for a more sustainable fashion ecosystem.",
            icon: <Globe className="w-7 h-7 text-primary" />,
        },
    ];

    return (
        <section className="py-16 px-4 md:px-20 lg:px-40 bg-white dark:bg-slate-900">
            <div className="flex flex-col max-w-[960px] mx-auto gap-10">
                {/* Header */}
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-[#111818] dark:text-white text-3xl font-black md:text-4xl">
                        Our Core Values
                    </h2>
                    <p className="text-[#608a8a] dark:text-gray-400 text-lg font-normal max-w-[720px]">
                        We believe in quality, innovation, and putting the customer first. Every decision we make is guided by these principles.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 rounded-xl border border-[#dbe6e6] dark:border-slate-700 bg-background-light dark:bg-[#102222] p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                {feature.icon}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#111818] dark:text-white text-xl font-bold">{feature.title}</h3>
                                <p className="text-[#608a8a] dark:text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
