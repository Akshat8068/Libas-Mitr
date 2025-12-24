import { Mail, User, Phone, MapPin } from "lucide-react";
import SignImgText from "../components/Sign/SignImgText";
import SectionHeader from "../components/Sign/SectionHeader";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-[#f8f8f8] dark:bg-[#102222] min-h-screen flex flex-col text-text-main dark:text-white">

            {/* TOP NAVBAR */}
            <header className="flex items-center justify-between border-b border-[#e5e5e5] px-6 lg:px-20 py-4 bg-white dark:bg-[#1a2c2c]">
                <div className="flex items-center gap-2 text-[#044343] dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
                    <h2 className="text-3xl font-bold tracking-tight">LibasMitr</h2>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-grow flex items-center justify-center p-4 lg:p-10">
                <div className="w-full max-w-[1200px] bg-white dark:bg-[#1a2c2c] rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row min-h-[700px]">

                    {/* LEFT IMAGE SECTION */}
                    <div
                        className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-10 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4_pcJ095wfcEFAC8XjtW49axOTL0oPJnpsw9wuVG7wqFlsbOBd7KMA8g4o4s5x-0GVXLarYyjzK0VKxPYF5MV5byjTnpEkTvuFW_vI2mIjBPEmkNFaGvC36qbag0h1XIfYR9Ze0E4L6Xtc-gTO-mhoR-F7wlcdCV_4cz88KGrCGhYUGDmRhqlB4V3TjdBggTZoAOVTfJuzqiWBLb7b94sRqslR-5yYNH58OiVIzZCK_J0b5HYadnpfa0AyLKg9JQ2MIWosCtDETfy')",
                        }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        <SignImgText heading={"Unlock Your Virtual Wardrobe"} description={"Experience premium fashion with our exclusive virtual try-on technology.See it before you wear it."} />
                    </div>

                    {/* RIGHT FORM SECTION */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 lg:px-16 xl:px-24">
                        <div className="w-full max-w-md mx-auto">

                            {/* HEADER */}
                            <SectionHeader heading={"Create Account"} descripition={"Join our community of fashion innovators"}>
                                <form className="space-y-5 m-2" onSubmit={(e) => e.preventDefault()}>

                                    {/* FULL NAME */}
                                    <div className="space-y-1.5 text-left">
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                                <User className="material-symbols-outlined text-[20px]"></User>
                                            </span>
                                            <input
                                                id="fullName"
                                                type="text"
                                                placeholder="e.g. Aditi Sharma"
                                                className="block w-full border rounded-lg border-gray-500 dark:border-gray-600 bg-white dark:bg-[#253838] pl-10 py-3 text-sm focus:border-[#044343] focus:ring-[#044343] dark:text-white"
                                            />
                                        </div>
                                    </div>
                                    {/* Phoen */}
                                    <div className="space-y-1.5 text-left">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Phone Number
                                        </label>

                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                                <Phone size={18} />
                                            </span>

                                            <input
                                                id="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className="block w-full rounded-lg border border-gray-500 dark:border-gray-600 bg-white dark:bg-[#253838] pl-10 py-3 text-sm
                       focus:border-[#044343] focus:ring-[#044343] dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    {/* EMAIL */}
                                    <div className="space-y-1.5 text-left">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                                <Mail className="material-symbols-outlined text-[20px]"></Mail>
                                            </span>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="name@example.com"
                                                className="block w-full rounded-lg border border-gray-500 dark:border-gray-600 bg-white dark:bg-[#253838] pl-10 py-3 text-sm focus:border-[#044343] focus:ring-[#044343] dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="space-y-1.5 text-left">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Password
                                        </label>
                                        <div className="relative">

                                            <input
                                                id="password"
                                                type="password"
                                                placeholder="••••••••"
                                                className="block w-full border rounded-lg border-gray-500 dark:border-gray-600 bg-white dark:bg-[#253838] pl-10 pr-10 py-3 text-sm focus:border-[#044343] focus:ring-[#044343] dark:text-white"
                                            />

                                        </div>
                                    </div>

                                    {/* CONFIRM PASSWORD */}
                                    <div className="space-y-1.5 text-left">
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Confirm Password
                                        </label>
                                        <div className="relative">

                                            <input
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="••••••••"
                                                className="block w-full border rounded-lg border-gray-500 dark:border-gray-600 bg-white dark:bg-[#253838] pl-10 py-3 text-sm focus:border-[#044343] focus:ring-[#044343] dark:text-white"
                                            />
                                        </div>
                                    </div>
                                    {/* Address */}
                                    <div className="space-y-1.5 text-left">
                                        <label
                                            htmlFor="address"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Address
                                        </label>

                                        <div className="relative">
                                            <span className="absolute top-3 left-0 flex items-start pl-3 text-gray-400">
                                                <MapPin size={18} />
                                            </span>

                                            <textarea
                                                id="address"
                                                rows={3}
                                                placeholder="House no, Street, City, State, Pincode"
                                                className="block w-full rounded-lg border border-gray-500 dark:border-gray-600 bg-white dark:bg-[#253838] pl-10 py-3 text-sm resize-none
                       focus:border-[#044343] focus:ring-[#044343] dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    {/* SUBMIT */}
                                    <button className="w-full logo-text  py-3.5 rounded-lg font-bold text-white bg-black hover:bg-gray-700 transition-colors uppercase tracking-wide">
                                        Create Account
                                    </button>
                                </form>
                            </SectionHeader>
                            {/* FOOTER */}
                            <div className="mt-8 text-center text-sm">
                                <p className="text-gray-600 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <Link to={"/login"} className="font-bold text-black hover:underline">
                                        Log In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
