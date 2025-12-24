const Hero2Section = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpWUQPGBGJ3IdOeC5KgeA1U_U5uUws3MI6b3jlQAGrUTxXXq-DnItQIBtI1y5YV6cwCykeGVugY-7ufT7jXxFe4WCShX29BtD3jZhMLX8pAH8XDbPN1L2ok0gYyTo5KFvXhRHeHgNIKEMkfFiwbp9q7FNj9pUnb6ZWDaIAJntyGdOygdq3RzGvvXXsjCPrMtXqFNVh44zHhd_UsuVgo5q4m0QnBf2l2aIqej10K2RNsuUlfMsOdonAyJyBry4f-soBXC-fe-C3DS_U"
                    alt="Woman shopping for fashion in a modern setting"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-10 max-w-[1200px]">
                <div className="max-w-[600px] flex flex-col gap-6 animate-fade-in-up">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wider uppercase w-fit">
                        Next Gen Shopping
                    </span>

                    <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] font-serif">
                        Fashion Meets <br /> Innovation
                    </h1>

                    <p className="text-gray-200 text-lg md:text-xl font-light font-display max-w-[480px] leading-relaxed">
                        Experience the future of shopping with our AI-powered Virtual Try-On
                        and Personal Stylist. See it before you buy it.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="px-8 py-3 bg-white text-primary rounded-lg font-bold text-sm hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg">
                            Explore Features
                        </button>

                        <button className="px-8 py-3 bg-primary/80 backdrop-blur-sm text-white border border-white/20 rounded-lg font-bold text-sm hover:bg-primary transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">
                                play_circle
                            </span>
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2Section;
