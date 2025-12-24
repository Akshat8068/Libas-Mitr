import { ShoppingBag } from "lucide-react";
import React from "react";

/* ===== PRODUCTS DATA ===== */
const newArrivalsData = [
    {
        brand: "LIBAS LUXE",
        title: "Royal Blue Silk Dress",
        price: "₹ 4,999",
        tag: "New",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB6MGT3GQ41JBYhzNM_TWVOXc5KwCTK1xdbXQlbCDpNlO36hNcZbzf5aiq0efsfY9CLkn8upXRrsEAtzHbFD2BsXmD5qAxqxPXxDD5Ahcycm8iGnxewnQIWYkf0aDThLRRz8aL11XQpvx1NEDWEZoMR5qVa4nMFUFTE3WWtA5x3JzZsiJOcCs2vrRUxOeZmXAmNpNVei5dA4z2iuKCEfIs0H3-UDanJkcRVW-xKdcGv8Kh2Qk6AoEPrLMe33du-zRZgX82waYRWYQpJ",
    },
    {
        brand: "MAN KIND",
        title: "Linen Summer Blazer",
        price: "₹ 8,450",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDlPkrkYmWLpKQhUlhWeQCEvGN_UI2gRwEJ4IRgBYk1-Udl6iIq5K8jJtpREblelGPXbcTbAbxLKIodGI4FmrsO7xTZz2xKDNJxxriQUfmuKcGlhInIZow9FoWSnMzKtrI7WEakMlcvj9kUwnnt-bYMnf0CAo6t34UhZE2Tl7_9_GNPxbySTTKW1nCUgsWXXqTiZXz9ma2gv4rLClrQx4mHwEP2cWeNfvBTR2_gUxrMk4Bf411qk2jmqjarmMfkevsvXES9_V7Ct710",
    },
    {
        brand: "VOGUE VISTA",
        title: "Crimson Evening Gown",
        price: "₹ 12,999",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDgl_-S6c0KTuhsqAvjzf-pXdk2x3xMoxCOGG8__Et2AkCiPP03Ez_gX7r6uW83d5B_SVWWjoAxkXiMF3YyhdRoym4aLaquGt5sRAxjZX-B4_4Jk_zI8tgXbMeg4YE65ysEpQigWoY6cS-LgbQAo_-b2D4Q-DAZ1X0b2DL6N_9pNh9OJYNmqBKEuxpSG95U8JuktPXyvON4Q9Hu6A4vjZuDq1WOOuqcmau4d6Dxq2Kq_humHiMXOUtMizO_9zg-O4v7CPL2SIxS_9QC",
    },
    {
        brand: "ETHNIC ROOTS",
        title: "Embroidered Nehru Jacket",
        price: "₹ 3,250",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuADYjq3NwDmjYEWZsFo1B_GNQcjFXjsdtf-FG5QrCVRqhKm8DQWU9Z8C_yEG99X-JGi5MPIfnqDu2yWTgXxKJH4MKixVR4Pil4BwmAAPHiMnc65cspZNEkieGJUe_ygK6p8IpFwEKs3DGNBPcXT4BLbedv3mPLvEzebnXpKe0cZALsWISB-giu1AjiBWlottpul3KXW4Ff6lNqDxquf7Q5X0Qc3G1jCYOJ4JT7gCb6SNqOwUOZT8hgdoSHMr7ChoQhbed6hoCqUrDts",
    },
    {
        brand: "ACCESSORIZE",
        title: "Canvas Tote Bag",
        price: "₹ 1,999",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuASFsM9a-TWzifWZP23Tvz8H9h7yVwrsl4twBtmiQkPsLT_jPYSL-cZjdJw4piMPzZfnQYv4i9u1yiCr3LuKBhJmIXXBplRJyXB0JtOltXgdTYsnSfL5TcZqjkUuPEijmIxowaU-lsX9HyavRfVPN8BTfWB3JmwFd4ttdFLcxQjmlOI2WHJC3XT6n_nJGFiplB1zGmi9-_fV0nuhgau6cf0lKcGGVSHsly0936-ShtEDrT0Nn3Du3B1PQlmuTw6O1YQtS00Y2xRQ93j",
    },
];

/* ===== COMPONENT ===== */
const NewArrivals = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-serif font-bold text-[#111818]">
                        New Arrivals
                    </h2>
                </div>

                {/* Products */}
                <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4">
                    {newArrivalsData.map((item, index) => (
                        <div key={index} className="min-w-[280px] group">
                            <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />

                                {/* Hover CTA */}
                                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                                    <button className=" w-full bg-white text-[#111818] py-3 rounded-md font-medium text-sm shadow-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white ">
                                        Add to Cart
                                    </button>
                                </div>


                                {item.tag && (
                                    <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-xs font-bold rounded">
                                        {item.tag}
                                    </span>
                                )}
                            </div>

                            <p className="text-xs text-gray-500 font-medium mb-1">
                                {item.brand}
                            </p>
                            <h3 className="text-base font-medium text-[#111818] truncate">
                                {item.title}
                            </h3>
                            <p className="text-black font-bold mt-1">
                                {item.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
