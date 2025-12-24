const CTASection = () => {
    return (
        <section className="w-full py-24 px-4 md:px-10 bg-white dark:bg-[#102222] flex justify-center">
            <div className="max-w-[800px] w-full bg-[#F8F8F8] dark:bg-[#0c1a1a] rounded-3xl p-10 md:p-16 text-center shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-text-main dark:text-white">
                    Ready to upgrade your wardrobe?
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Join thousands of users experiencing the smartest way to shop for fashion.
                </p>

                <button className="bg-primary hover:bg-primary-dark text-white text-lg px-10 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Join LibasMitr
                </button>

                <p className="mt-4 text-xs text-gray-400">
                    Free sign up. No credit card required for trial.
                </p>
            </div>
        </section>
    );
};

export default CTASection;
