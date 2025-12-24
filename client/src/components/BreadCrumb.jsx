import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex flex-wrap items-center gap-2 text-sm text-[#608a8a] mb-6">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href ? (
                        <a
                            href={item.href}
                            className="hover:text-black transition-colors"
                        >
                            {item.label}
                        </a>
                    ) : (
                        <span className="font-medium text-[#111818]">
                            {item.label}
                        </span>
                    )}

                    {index < items.length - 1 && (
                        <ChevronRight
                            size={16}
                            className="text-[#608a8a]"
                        />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
