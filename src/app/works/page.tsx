"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorksPage() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const filteredProjects = activeFilter
        ? Object.entries(projects).filter(([_, p]) => p.category === activeFilter)
        : Object.entries(projects);

    return (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-10 lg:px-44 bg-black/50 backdrop-blur-md">
                {/* Logo */}
                <div className="flex items-center space-x-0.5 text-2xl font-black tracking-[-0.05em]">
                    <Link href="/">
                        <span>NITHESH KUMAR M</span>
                    </Link>
                </div>

                {/* Navigation Links and Contact Button - Right aligned */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6 lg:space-x-8 text-[10px] lg:text-[11px] font-semibold tracking-[0.15em] text-[#8a8a8a]">
                        <Link href="/" className="hover:text-white transition-colors duration-200 uppercase">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-white transition-colors duration-200 uppercase">
                            About Me
                        </Link>
                        <Link href="/works" className="text-white transition-colors duration-200 uppercase">
                            My Works
                        </Link>
                    </div>

                    <Link
                        href="/contact"
                        className="px-8 py-3 border border-white rounded-full bg-white text-black transition-all font-bold tracking-widest text-[11px]"
                    >
                        CONTACT
                    </Link>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden z-50">
                    <button
                        className="text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>


            </nav>

            {/* Main Content */}
            <main className="pt-40 pb-24 px-10 lg:px-44 max-w-[1920px] mx-auto space-y-32">
                {/* Header Section */}
                <div className="text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white">
                        My Projects Highlight
                    </h2>
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                        {['UI/UX', 'REACT.JS'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
                                className={`px-8 lg:px-10 py-3 rounded-full border border-[#FF8139] text-[11px] font-bold tracking-[0.2em] transition-all uppercase ${activeFilter === filter
                                    ? "bg-[#FF8139] text-white"
                                    : "text-white hover:bg-[#FF8139]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-24">
                    {filteredProjects.map(([slug, project]) => (
                        <Link key={slug} href={`/works/${slug}`} className="group space-y-6 block">
                            <div className="relative overflow-hidden rounded-[2.5rem] aspect-square bg-[#0a0a0a] border border-white/5">
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-4 px-2">
                                <h3 className="text-xl lg:text-2xl font-bold flex items-center">
                                    {project.title}
                                    <span className="ml-4 w-10 h-[1.5px] bg-[#FF8139]"></span>
                                </h3>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>

            {/* Mobile Menu Overlay */}
            {
                isMobileMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden">
                        <Link href="/" className="text-2xl font-bold tracking-widest hover:text-[#FF8139] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            HOME
                        </Link>
                        <Link href="/about" className="text-2xl font-bold tracking-widest hover:text-[#FF8139] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            ABOUT ME
                        </Link>
                        <Link href="/works" className="text-2xl font-bold tracking-widest hover:text-[#FF8139] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            MY WORKS
                        </Link>
                        <Link href="/contact" className="text-2xl font-bold tracking-widest hover:text-[#FF8139] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            CONTACT
                        </Link>
                    </div>
                )
            }
        </div >
    );
}
