import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
    "brand-journey": {
        title: "Brand Journey Improvements",
        subtitle: "Strategic Brand Elevation",
        heroImage: "/project-1.png",
        storyLines: [
            "The Brand Journey Improvements project focused on redefining how users interact with evolving brand identities. We explored the intersection of heritage and modern minimalism, ensuring every touchpoint felt intentional and progressive.",
            "By leveraging advanced 3D visualization and kinetic typography, we created a digital experience that breathes life into static brand guidelines, allowing them to adapt dynamically across platforms."
        ],
        dayOneLines: [
            "The initial phase involved a deep dive into the brand's core values. We realized that 'movement' was the key missing element. Starting with day one, we prioritized modularity and fluid transitions.",
            "A clean, minimalist approach was taken to preserve the brand's legacy while pushing it into the future with bold, interactive elements and a refined color palette."
        ],
        gridImages: ["/project_detail_prism.png", "/project_detail_hand.png"]
    },
    "brand-grouping": {
        title: "Brand Grouping",
        subtitle: "Visual Identity Systems",
        heroImage: "/project-2.png",
        storyLines: [
            "Brand Grouping was an exercise in organization and visual hierarchy. We developed a system that allows disparate brand elements to coexist under a unified aesthetic umbrella without losing their individual character.",
            "The challenge was to create a cohesive language that translates across web, print, and environmental design, maintaining consistency in even the most complex brand ecosystems."
        ],
        dayOneLines: [
            "Day one began with sorting hundreds of brand assets. We looked for patterns in texture, light, and geometry. This metadata informed our final grouping strategy.",
            "The result is a flexible framework that adapts to the scale of the brand, providing a roadmap for future expansion and creative direction."
        ],
        gridImages: ["/project_detail_prism.png", "/project_detail_hand.png"]
    },
    "nft-glimps": {
        title: "NFT Glimps",
        subtitle: "Digital Assets & Web3",
        heroImage: "/project-3.png",
        storyLines: [
            "NFT Glimps explored the visual possibilities of the Web3 space. We focused on high-end 3D abstract renders that evoke a sense of digital rarity and futuristic ownership.",
            "Each visual was crafted to stand alone as a piece of digital art while fitting into a broader collection aesthetic that values translucency, neon light paths, and complex geometry."
        ],
        dayOneLines: [
            "From the first render, we knew we wanted to focus on light refraction. We spent weeks perfecting the 'glow' that defines the collection's ethereal feel.",
            "Experimental shaders and post-processing techniques were used to achieve a look that feels both synthetic and organic, capturing the essence of the NFT movement."
        ],
        gridImages: ["/project_detail_prism.png", "/project_detail_hand.png"]
    },
    "brand-suggestions": {
        title: "Brand Suggestions",
        subtitle: "AI-Driven Design Insights",
        heroImage: "/project-4.png",
        storyLines: [
            "Brand Suggestions utilized predictive modeling to offer creative direction to emerging brands. We combined data-driven insights with human-centric design to suggest paths that resonate with target audiences.",
            "The project demonstrates how AI can empower designers by providing a platform for rapid prototyping and color theory exploration based on consumer psychology."
        ],
        dayOneLines: [
            "We started with a blank canvas and a neural network. Day one was about teaching the system the difference between 'minimalist' and 'empty'.",
            "The final output is a series of visually stunning case studies that prove technology and art can collaborate to solve complex branding challenges."
        ],
        gridImages: ["/project_detail_prism.png", "/project_detail_hand.png"]
    }
};

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

                {/* Project Story Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white max-w-sm">
                        Project Story
                    </h2>
                    <div className="space-y-8 text-[#8a8a8a] text-lg leading-relaxed max-w-xl">
                        {project.storyLines.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                </section>

                {/* Detailed Grid Visuals */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {project.gridImages.map((src, i) => (
                        <div key={i} className="relative overflow-hidden rounded-[2.5rem] border border-white/5 aspect-square bg-[#0a0a0a]">
                            <img src={src} alt={`Detail ${i + 1}`} className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                        </div>
                    ))}
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
                                    <img src={i === 0 ? "/project_other_head.png" : i === 1 ? "/project_other_car.png" : p.heroImage} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
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
