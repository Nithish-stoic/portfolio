import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-10 lg:px-44 bg-black/50 backdrop-blur-md">
                {/* Logo */}
                <div className="flex items-center space-x-0.5 text-2xl font-black tracking-[-0.05em]">
                    <Link href="/">
                        <span>NITHESH <br /> KUMAR M</span>
                    </Link>
                </div>

                {/* Navigation Links and Contact Button - Right aligned */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6 lg:space-x-8 text-[10px] lg:text-[11px] font-semibold tracking-[0.15em] text-[#8a8a8a]">
                        <Link href="/" className="hover:text-white transition-colors duration-200 uppercase">
                            Home
                        </Link>
                        <Link href="/about" className="text-white transition-colors duration-200 uppercase">
                            About Me
                        </Link>
                        <Link href="/#works" className="hover:text-white transition-colors duration-200 uppercase">
                            My Works
                        </Link>
                    </div>

                    <Link
                        href="/contact"
                        className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all font-bold tracking-widest text-[11px]"
                    >
                        CONTACT
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-40 pb-24 px-10 lg:px-44 max-w-[1920px] mx-auto">
                {/* Header Section */}
                <header className="space-y-4 mb-20">
                    <h1 className="text-6xl md:text-5xl font-black tracking-tight leading-none text-white">
                        About Me
                    </h1>
                    <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#8a8a8a] pl-2">
                        Little Brief About Myself
                    </p>
                    <div className="w-full h-px bg-white/10 mt-12" />
                </header>

                {/* Mission Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
                    <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-white max-w-xl">
                        My mission
                        is to make
                        design
                        easier.
                    </h2>
                    <div className="space-y-8 text-[#8a8a8a] text-lg leading-relaxed max-w-lg mt-4 lg:mt-0">
                        <p>
                            Create custom Designs with NITHESH that converts more visitors
                            than any website. With lots of unique design, you can easily
                            select a logo without hassle.
                        </p>
                        <p>
                            Create custom landing logos with NITHESH that converts more visitors
                            than any website. With lots of unique design, you can easily
                            build a logo without porbolem.
                        </p>
                    </div>
                </section>

                {/* Photo Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
                    {/* Portrait 1 */}
                    <div className="relative group">
                        <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/5 aspect-[4/5] sm:aspect-auto">
                            <img
                                src="/hoodie_portrait.png"
                                alt="Portrait with hoodie"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative Capsules */}
                        <div className="absolute top-1/2 -left-6 w-8 h-24 border border-[#FF8139] rounded-full z-20 opacity-60" />
                        <div className="absolute -top-4 -left-4 w-24 h-8 border border-[#FF8139]/30 rounded-full z-0" />
                    </div>

                    {/* Portrait 2 */}
                    <div className="relative group md:mt-12">
                        <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/5 aspect-[4/5] sm:aspect-auto">
                            <img
                                src="/casual_portrait.png"
                                alt="Casual portrait"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative Capsules */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-10 border border-[#FF8139] rounded-full z-20 opacity-60" />
                        <div className="absolute -bottom-10 -right-2 w-10 h-32 border border-[#FF8139]/30 rounded-full z-0" />
                    </div>
                </section>

                {/* Social Section */}
                <footer className="pt-16 border-t border-white/10">
                    <div className="space-y-12">
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Follow me on:
                        </h3>
                        <div className="flex flex-wrap gap-x-12 lg:gap-x-24 gap-y-8">
                            {['DRIBBLE', 'TWITTER', 'FACEBOOK', 'INSTAGRAM'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social.toLowerCase()}`}
                                    className="text-[13px] font-black tracking-[0.2em] text-white hover:text-[#FF8139] transition-colors duration-200"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
