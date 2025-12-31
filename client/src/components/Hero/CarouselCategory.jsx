import { useState } from "react";
import menCategory from "../../assets/menCatgroy.png";
import womenCategory from "../../assets/womenCatrgory.jpg";
import kidCategory from "../../assets/kidCatrgory.jpg";

const collections = [
    {
        key: "men",
        name: "Men",
        cardImg: menCategory,
        des: "Premium menswear including hoodies, jackets and ethnic styles.",
    },
    {
        key: "women",
        name: "Women",
        cardImg: womenCategory,
        des: "Elegant women fashion with modern and traditional designs.",
    },
    {
        key: "kids",
        name: "Kids",
        cardImg: kidCategory,
        des: "Comfortable and colorful fashion for kids.",
    },
    {
        key: "libasmitr",
        name: "LibasMitr",
        cardImg: menCategory,
        des: "Signature collections inspired by Indian culture and trends.",
    },
];

const CarouselCategory = () => {
    const [active, setActive] = useState(collections[0]);
    return (
        <section className="h-[90vh] w-full">
            <div className="flex w-full h-full shadow-md mx-auto relative overflow-hidden flex-col md:flex-row">

                {/* Left Zone - Buttons */}
                <div className="flex flex-row md:flex-col justify-center md:w-[350px] w-full gap-2 md:gap-0 bg-white p-2 md:p-0">
                    <ul className="flex md:flex-col flex-row gap-2 md:gap-0 w-full justify-center md:justify-start">
                        {collections.map((item) => (
                            <li key={item.key}>
                                <button
                                    onClick={() => setActive(item)}
                                    className={`px-4 py-2 rounded-md md:w-full text-center md:text-left
                                    ${active.key === item.key
                                            ? "text-red-600 font-semibold border-r-0 md:border-r-4 border-red-600 bg-red-50"
                                            : "text-gray-600 hover:text-black"
                                        }`}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Middle Border */}
                <div className="hidden md:block w-[2px] bg-gray-200 self-center h-[75%]"></div>

                {/* Right Zone - Image + Text */}
                <div className="flex-1 relative flex flex-col items-center justify-center overflow-hidden mt-4 md:mt-0">
                    {collections.map((item) => (
                        <div
                            key={item.key}
                            className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center transition-all duration-700 ease-out
                                ${active.key === item.key ? "translate-y-0 opacity-100" : "-translate-y-[400px] opacity-0 pointer-events-none"}`}
                        >
                            <div className="w-[90%] md:w-[70%] text-center">

                                {/* IMAGE */}
                                <div
                                    className="min-h-[300px] min-w-52 max-w-96 rounded-xl bg-cover shadow-lg mb-6 transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${item.cardImg})` }}
                                >
                                    <div className="absolute inset-0 group-hover:bg-black/0 transition-colors"></div>
                                </div>

                                {/* TEXT */}
                                <h3 className="text-3xl font-medium text-[#111818] dark:text-white transition-all duration-500">
                                    {item.name}
                                </h3>
                                <p className="mt-3 text-sm text-gray-500 transition-opacity duration-500">
                                    {item.des}
                                </p>

                                {/* BUTTON */}
                                <button className="mt-5 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CarouselCategory