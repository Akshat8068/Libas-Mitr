import React from "react";
import { ArrowRight } from "lucide-react";

const FeatureCards = () => {
    const cards = [
        {
            titleSmall: "Our Roots",
            titleLarge: "From Indore to the World",
            description:
                "Starting as a hub for textile excellence in the heart of India, LibasMitr was born from a desire to showcase Indore's rich fabric heritage. We began as a small collective of artisans and have grown into a premium platform connecting heritage craftsmanship with a global audience.",
            buttonText: "Read Our Full History",
            imageUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUxGhXDxbUiqHoL7ooKf1-zsISm90XT33IX-tYcLvNiw8ABxzYLqBwNYgxCB56qU81O_xzZ01tcq1zfYSPQg70S1NXBvQLysjyuyh0JGbtjXr_dzKGG5t7E30sdyEJhk2P73uOAXF3C9DQitSHe8nemxbDY16glg4GnU70vmBuI_TzoXXBJ14A-bl1OzcpzX2F8lCneoZ_248j0HbZ3gSUZvrWd1xU7p6fLbCDl-UwwjKE-34tzMUC3VGorxgwgsOSzPUCZxkkfSr",
            reversed: false,
        },
        {
            titleSmall: "Innovation",
            titleLarge: "The Virtual Try-On Revolution",
            description:
                'We realized that the biggest barrier to online fashion was uncertainty. "Will it fit? Will it suit me?" To solve this, we integrated cutting-edge AR technology. Our Virtual Try-On feature allows you to visualize how our premium collections look on you before you buy, merging confidence with convenience.',
            buttonText: "Try It Now",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPiUtLjZ5zWUA_pomCLSDLOWFkB0FZ_cOzg&s",
            reversed: true,
        },
    ];

    return (
        <section className="py-12 px-4 md:px-20 lg:px-40">
            <div className="flex flex-col max-w-[1100px] mx-auto gap-12">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-sm border border-[#e5eaea] dark:border-slate-800"
                    >
                        <div
                            className={`flex flex-col md:flex-row items-center gap-8 ${card.reversed ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Text */}
                            <div className="flex flex-col flex-1 gap-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-primary text-sm font-bold uppercase tracking-wider">
                                        {card.titleSmall}
                                    </h3>
                                    <p className="text-[#111818] dark:text-white text-3xl font-bold leading-tight">
                                        {card.titleLarge}
                                    </p>
                                    <p className="text-[#608a8a] dark:text-gray-300 text-base leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                                <button className="flex items-center gap-2 text-[#111818] dark:text-white font-bold hover:text-primary transition-colors w-fit group">
                                    {card.buttonText}
                                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>

                            {/* Image */}
                            <div
                                className="w-full md:w-1/2 aspect-video rounded-xl bg-cover bg-center shadow-md"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                                alt={card.titleLarge}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureCards;
