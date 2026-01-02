// Breadcrumb.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BreadCrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <div className="max-w-6xl mx-auto px-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <Link to="/" className="hover:text-gray-900 transition">Home</Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <React.Fragment key={routeTo}>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            {isLast ? (
                                <span className="text-gray-900 capitalize">{name.replace(/-/g, " ")}</span>
                            ) : (
                                <Link to={routeTo} className="hover:text-gray-900 transition capitalize">
                                    {name.replace(/-/g, " ")}
                                </Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default BreadCrumb;
