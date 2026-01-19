"use strict";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT ME", href: "/about" },
        { name: "MY WORKS", href: "/works" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 lg:px-44 transition-all duration-300 ${isScrolled
                ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl"
                : "py-10 bg-transparent"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center space-x-0.5 text-2xl font-black tracking-[-0.05em] text-white">
                <Link href="/">
                    <span>NITHESH KUMAR M</span>
                </Link>
            </div>

            {/* Navigation Links and Contact Button - Right aligned */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                {/* Navigation Links */}
                <div className="flex items-center space-x-6 lg:space-x-8 text-[10px] lg:text-[11px] font-semibold tracking-[0.15em]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors duration-200 uppercase ${isActive ? "text-white" : "text-[#8a8a8a] hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <Link
                    href="/contact"
                    className={`px-8 py-3 rounded-full transition-all font-bold tracking-widest text-[11px] uppercase ${isScrolled || pathname === "/works" || pathname === "/contact"
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/20 text-white hover:bg-white hover:text-black"
                        }`}
                >
                    CONTACT
                </Link>
            </div>

            {/* Mobile menu icon (simplified) */}
            <div className="md:hidden">
                <button className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
