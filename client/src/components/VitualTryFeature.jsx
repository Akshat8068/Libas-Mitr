import React from "react";
import { Camera, Shirt, Eye } from "lucide-react";
import bgVideo from "../assets/virtualbg.mp4"
const steps = [
    {
        step: "Step 1",
        title: "Upload Your Photo",
        desc: "Start by uploading a full-body picture. LibasMitr AI creates your personalized virtual model.",
        icon: Camera,
    },
    {
        step: "Step 2",
        title: "Select an Item",
        desc: "Browse ethnic & western collections and pick any outfit to try virtually.",
        icon: Shirt,
    },
    {
        step: "Step 3",
        title: "See it on You",
        desc: "Instantly preview how the outfit looks on your body with realistic fitting.",
        icon: Eye,
    },
];

const VirtualTryOnSteps = () => {
    return (
        <section className="relative w-full h-[100vh] overflow-hidden">

            {/* 🔹 Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* 🔹 Overlay (for readability) */}
            <div className="absolute inset-0 bg-white/10 dark:bg-black/60" />

            {/* 🔹 Content */}
            <div className="relative z-10 flex w-full max-w-7xl h-full flex-col justify-center mx-auto px-4 md:px-10 lg:px-20">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-heading text-white dark:text-white text-4xl font-bold leading-tight">
                        Virtual Try-On in 3 Easy Steps
                    </h2>
                    <p className="mt-2 text-white max-w-2xl mx-auto">
                        Experience the future of shopping with LibasMitr. See how outfits look on you before you buy.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center "
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
                                    <Icon size={36} />
                                </div>

                                <p className="mt-4 text-lg font-bold text-white dark:text-white">
                                    {item.step}
                                </p>

                                <h3 className="mt-1 font-heading text-2xl font-bold text-white dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-white dark:text-white/80 max-w-xs">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default VirtualTryOnSteps;
