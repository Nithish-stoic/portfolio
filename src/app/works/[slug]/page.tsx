import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects[slug as keyof typeof projects];

    if (!project) {
        notFound();
    }

    const otherProjects = Object.entries(projects)
        .filter(([projectSlug]) => projectSlug !== slug)
        .slice(0, 3);

    return (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-10 lg:px-44 bg-black/50 backdrop-blur-md">
                <div className="flex items-center space-x-0.5 text-2xl font-black tracking-[-0.05em]">
                    <Link href="/">
                        <span>NITHESH KUMAR M</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    <div className="flex items-center space-x-6 lg:space-x-8 text-[10px] lg:text-[11px] font-semibold tracking-[0.15em] text-[#8a8a8a]">
                        <Link href="/" className="hover:text-white transition-colors duration-200 uppercase">Home</Link>
                        <Link href="/about" className="hover:text-white transition-colors duration-200 uppercase">About Me</Link>
                        <Link href="/works" className="text-white transition-colors duration-200 uppercase">My Works</Link>
                    </div>
                    <Link href="/contact" className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all font-bold tracking-widest text-[11px]">CONTACT</Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-40 pb-24 px-10 lg:px-44 max-w-7xl mx-auto space-y-32">
                {/* Header Section */}
                <header className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none text-white">
                        Project Detail
                    </h1>
                    <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#8a8a8a] pl-2">
                        Details About The Project
                    </p>
                    <div className="w-full h-px bg-white/10 mt-12" />
                </header>

                {/* Hero Visual */}
                <section className="relative w-full aspect-[21/9] overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0a0a]">
                    <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover grayscale brightness-90" />
                </section>

                {/* Live Link */}
                {project.liveLink && (
                    <div className="flex justify-center -mt-8 relative z-10">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 rounded-full bg-[#FF8139] text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_40px_-10px_rgba(255,129,57,0.5)]"
                        >
                            Live Link
                        </a>
                    </div>
                )}

                {/* Project Story Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white max-w-sm">
                        Project Story
                    </h2>
                    <div className="space-y-8 text-[#8a8a8a] text-lg leading-relaxed max-w-xl">
                        {project.storyLines.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                </section>



                {/* Day One Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white max-w-sm">
                        Day One
                    </h2>
                    <div className="space-y-8 text-[#8a8a8a] text-lg leading-relaxed max-w-xl">
                        {project.dayOneLines.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                </section>

                {/* Visual Pagination */}
                <section className="flex items-center justify-between pt-16 border-t border-white/10">
                    <Link href="/works" className="group flex items-center space-x-4 text-[11px] font-black tracking-[0.2em] text-[#8a8a8a] hover:text-white transition-colors uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span>Previous Project</span>
                    </Link>
                    <Link href="/works" className="group flex items-center space-x-4 text-[11px] font-black tracking-[0.2em] text-[#8a8a8a] hover:text-white transition-colors uppercase">
                        <span>Next Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </section>

                {/* Other Projects Section */}
                <section className="space-y-16 pt-32">
                    <h2 className="text-5xl md:text-7xl font-black text-center text-white">
                        Other Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherProjects.map(([slug, p], i) => (
                            <Link key={slug} href={`/works/${slug}`} className="group space-y-6">
                                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-[#0a0a0a] border border-white/5">
                                    <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">{p.title}</h3>
                                    <p className="text-[10px] font-bold text-[#8a8a8a] uppercase tracking-widest">{p.subtitle}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
