import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);
    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
                !top && "bg-white backdrop-blur-sm shadow-lg"
            }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Site branding */}
                    {/* Logo */}
                    {/* Add title to logo*/}
                    {/*allign items next to each other tailwind */}
                    <div className="flex items-center">
                        <div className="text-2xl md:text-3xl font-bold">
                            Portfolio
                        </div>
                    </div>
                    {/* Add title to logo*/}
                </div>
            </div>
        </header>
    );
}

export default Header;
