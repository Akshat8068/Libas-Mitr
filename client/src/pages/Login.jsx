import { Eye, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import SignImgText from "../components/Sign/SignImgText";
import SectionHeader from "../components/Sign/SectionHeader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)

    const [formData, setfromData] = useState({
        email: "", password: ""
    })
    const { email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setfromData({
            ...formData
            [e.target.name] = e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(lo)
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
        if (isError && message) {
            toast.error(message)
        }
    }, [user, isError, message])

    if (isLoading) {
        return (
            <h1 className="text-center text-2xl font-semibold">Loading....</h1>
        )
    }
    return (
        <div className="min-h-screen flex flex-col md:flex-row w-full">

            {/* LEFT SIDE – EDITORIAL IMAGE */}
            <div
                className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-10 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4_pcJ095wfcEFAC8XjtW49axOTL0oPJnpsw9wuVG7wqFlsbOBd7KMA8g4o4s5x-0GVXLarYyjzK0VKxPYF5MV5byjTnpEkTvuFW_vI2mIjBPEmkNFaGvC36qbag0h1XIfYR9Ze0E4L6Xtc-gTO-mhoR-F7wlcdCV_4cz88KGrCGhYUGDmRhqlB4V3TjdBggTZoAOVTfJuzqiWBLb7b94sRqslR-5yYNH58OiVIzZCK_J0b5HYadnpfa0AyLKg9JQ2MIWosCtDETfy')",
                }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <SignImgText heading={"Experience the new era of virtual Try On"} />

            </div>

            {/* RIGHT SIDE – LOGIN FORM */}
            <div className="flex-1 flex flex-col min-h-screen relative">

                <div className="flex-1 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
                    <div className="w-full max-w-[440px] space-y-8">

                        {/* Header */}
                        
                        <SectionHeader heading={"Welcome Back"} descripition={"Explore your curated styles and virtual try-on journey."}>

                            {/* Form */}
                            <form
                                className="space-y-5 m-4"
                                onSubmit={handleSubmit}
                            >
                                {/* Email */}
                                <div className="space-y-2 text-left">
                                    <label className="text-[#212121] text-sm font-medium block">
                                        Email
                                    </label>

                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            className="w-full h-12 px-4 rounded-lg border border-[#dbe6e6] bg-white text-[#212121] placeholder-[#608a8a] focus:border-[#044343] focus:ring-1 focus:ring-[#044343] transition-all outline-none"
                                        />

                                        <div className="absolute right-3 top-3 text-[#608a8a] group-focus-within:text-[#044343] transition-colors pointer-events-none">
                                            <Mail className="material-symbols-outlined text-[20px]">

                                            </Mail>
                                        </div>
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="text-[#212121] text-sm font-medium">
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-sm font-semibold text-[#044343] hover:underline hover:text-[#033232]"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            className="w-full h-12 px-4 pr-12 rounded-lg border border-[#dbe6e6] bg-white text-[#212121] placeholder-[#608a8a] focus:border-[#044343] focus:ring-1 focus:ring-[#044343] transition-all outline-none"
                                        />

                                        <button
                                            type="button"
                                            className="absolute right-3 top-3 text-[#608a8a] hover:text-[#044343] transition-colors"
                                        >
                                            <Eye className="material-symbols-outlined text-[20px]"></Eye>
                                        </button>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button className="w-full logo-text  py-3.5 rounded-lg font-bold text-white bg-black hover:bg-gray-700 transition-colors uppercase tracking-wide">
                                    Login
                                </button>
                            </form>
                        </SectionHeader>
                        {/* Footer */}
                        <div className="mt-8 text-center text-sm">
                            <p className="text-gray-600 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link to="/register" className="font-bold text-black hover:underline">
                                    Register
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
