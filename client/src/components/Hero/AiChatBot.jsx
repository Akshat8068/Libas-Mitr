import React from "react";
import { Star, Palette, Gift, PlusCircle, Send } from "lucide-react";

const AIStylist = () => {
    const products = [
        {
            name: "Blush Pink Silk",
            price: "$120",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBH0ex5M415j1QLbF4vk5i5XgibtJJGR9NVpvkWkBXXPrsfxjlTbH7pCNdAtUqpj7MAVxIrh27Eq3xWsLXM4VmT0xtx0rjM6cZxiUWWmYmLBUCeat07v8semZwsAsssQJdO1tz453ufSKrsq7t1GXFrjZfam6cekUmOj-89UG2WS6yd6gpzqS7z70g_H6o54_4Z68EfF_NYP_KXpgUAS56oxbBho7Q_u7EX0eJhh3v2K2UrvzsIepfcCA-A2jDmT2d39-RgPPlaqURT",
        },
        {
            name: "Sky Blue Chiffon",
            price: "$145",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwQnxTDPeI2pP9SY--qygI0q9zlbnBG4G7w8fjdC4MGKnmCFKJcQ0f32eR6P8LdDC4DDk6_cjkWieec8yHB1cznhbxp0d8IK2wHjW4AoxE6w6hSG0wuz3GDysiLjjA70rwVQM4yFerks6-7UjeHUlsMOcMqChEOTJauh8h3lUsQyl7EzC9amy2bMC7Bsr5qYGxsNp1v3lYjRh2iR6ytKMWCL7y8EzZyYPxeQrvpBZZoY6csjAnvFGHzuCmz8DDEp2U_kqadc5IAH4R",
        },
    ];

    return (
        <section className="w-full py-24 px-4 md:px-10 bg-[#F0F5F5] dark:bg-[#0c1a1a]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <div className="flex flex-col gap-6">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Star className="text-3xl" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white leading-tight font-serif">
                        Meet Your Personal <br /> LibasMitr Stylist
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        Need outfit inspiration for a wedding or festive event? Our AI stylist learns your preferences and
                        past purchases to suggest the perfect LibasMitr look tailored just for you.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                            <Palette className="text-primary mb-2" />
                            <h4 className="font-bold text-text-main dark:text-white mb-1">Style Advice</h4>
                            <p className="text-sm text-gray-500">Get tips on trending combinations.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                            <Gift className="text-primary mb-2" />
                            <h4 className="font-bold text-text-main dark:text-white mb-1">Event Ready</h4>
                            <p className="text-sm text-gray-500">Curated looks for special occasions.</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="bg-black hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Ask the Stylist
                        </button>
                    </div>
                </div>

                {/* Visual Side: Chat Interface */}
                <div className="relative order-first lg:order-last flex justify-center">
                    {/* Decorative background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 dark:bg-white/5 rounded-full blur-3xl -z-10"></div>

                    {/* Phone/Chat Mockup */}
                    <div className="w-full max-w-[380px] bg-white dark:bg-[#1a2e2e] rounded-[2rem] shadow-2xl border-[8px] border-white dark:border-gray-700 overflow-hidden relative">
                        {/* Chat Header */}
                        <div className="bg-primary p-4 flex items-center gap-3">
                            <div className="relative">
                                <div className="size-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                                    <Star />
                                </div>
                                <div className="absolute bottom-0 right-0 size-3 bg-green-400 rounded-full border-2 border-primary"></div>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">LibasMitr Stylist</h3>
                                <p className="text-white/70 text-xs">Online • Replies instantly</p>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="h-[400px] bg-[#f8f9fa] dark:bg-[#121f1f] p-4 flex flex-col gap-4 overflow-hidden relative">
                            {/* AI Message */}
                            <div className="flex gap-2">
                                <div className="size-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary text-xs font-bold">
                                    AI
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 dark:text-gray-200 max-w-[85%]">
                                    Hi there! 👋 I see you're looking for a festive outfit. Should we explore floral Lehengas
                                    or pastel Sarees?
                                </div>
                            </div>

                            {/* User Message */}
                            <div className="flex gap-2 flex-row-reverse">
                                <img
                                    alt="User avatar"
                                    className="size-8 rounded-full object-cover border border-white"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRe0Oy7pwP8r69eRaHZaTaW0RVFgfSynK0zxdCQJrwA6EhZAL4WzQNCvSoJy57853CzBT-6iT4BH6lbm5xcaq1ctTj8jYVOobZ1G07wRA7_5V4gl6XmLLEgmyQfg5Txk1f0_kIn_9_uYCwx7RDn-iAJA1tNEPR3An_vbehvRIrV0IfRn_FIlgL_i2_TS_6ciMM6sbDahL1GQQtzTBASUmHxkWCjWlSTaoPCesxl88xdhClEOE2v_GToZBv6tFUQ_5lU_8j2Ign6rvY"
                                />
                                <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[85%]">
                                    I prefer pastel Sarees. Something light and elegant!
                                </div>
                            </div>

                            {/* Product Recommendation Mini Cards */}
                            <div className="flex gap-2 overflow-x-auto pb-2 mt-2">
                                {products.map((prod, i) => (
                                    <div
                                        key={i}
                                        className="min-w-[100px] rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                                    >
                                        <img alt={prod.name} className="h-24 w-full object-cover" src={prod.image} />
                                        <div className="p-1.5 bg-white dark:bg-gray-700">
                                            <div className="text-[10px] font-bold truncate dark:text-white">{prod.name}</div>
                                            <div className="text-[10px] text-primary dark:text-emerald-400 font-bold">{prod.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Fade overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f8f9fa] dark:from-[#121f1f] to-transparent"></div>
                        </div>

                        {/* Chat Input */}
                        <div className="bg-white dark:bg-gray-800 p-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2">
                            <button className="text-gray-400 hover:text-primary">
                                <PlusCircle />
                            </button>
                            <div className="flex-1 bg-gray-100 dark:bg-gray-900 rounded-full h-9 px-4 flex items-center text-sm text-gray-500">
                                I love the pink one...
                            </div>
                            <button className="text-primary">
                                <Send />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIStylist;
