import AI1 from "../../assets/one.jpg"
import AI2 from "../../assets/three.png"
const AIStylist = () => {
    

    return (
        <section className="w-full py-20">
            <div className="max-w-6xl mx-auto px-4 space-y-16">

                {/* Block 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    <div
                        className="md:col-span-2 rounded-2xl bg-cover bg-center min-h-[320px]"
                        style={{ backgroundImage: `url(${AI1})` }}
                    ></div>

                    <div className="md:col-span-1 flex flex-col justify-center bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
                        <h2 className="text-3xl font-bold mb-4">
                            Smart Outfit Suggestions — Just for You
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            LibasMitr ka AI Stylist aapke taste, body-fit aur occasions ko samajhkar
                            ready-to-wear looks suggest karta hai — jaise ek personal stylist ho,
                            jo hamesha sahi idea de.
                        </p>
                        <a
                            href="#"
                            className="inline-block border border-gray-800 dark:border-white px-5 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition"
                        >
                            Try AI Stylist
                        </a>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    <div className="md:order-2 rounded-2xl bg-cover bg-center min-h-[320px]"
                        style={{ backgroundImage: `url(${AI2})` }}
                    ></div>

                    <div className="md:col-span-2 md:order-1 flex flex-col justify-center bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
                        <h2 className="text-3xl font-bold mb-4">
                            Occasion-Ready Looks, Instantly
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Wedding, party, office ya casual day-out — AI Stylist aapko
                            color-matching, accessories aur complete styling tips deta hai,
                            taaki har look perfect lage.
                        </p>
                        <a
                            href="#"
                            className="inline-block border border-gray-800 dark:border-white px-5 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition"
                        >
                            Get Style Ideas
                        </a>
                    </div>
                </div>

            </div>
        </section>

       
    );
};

export default AIStylist;
