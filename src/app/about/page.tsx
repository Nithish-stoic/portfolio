import Link from "next/link";

export default function AboutPage() {
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
                    <div className="space-y-8 text-[#8a8a8a] text-lg leading-relaxed max-w-lg mt-4 lg:mt-0 text-justify">
                        <p>
                            I am a Frontend Developer & UI/UX Designer driven by a singular mission: to make design easier.
                            I specialize in creating custom designs and landing logos that are not only visually unique but are also strategically built to convert more visitors than standard websites.
                        </p>
                        <p>
                            By combining technical development skills with a deep understanding of user experience, I help brands build a professional presence without the usual hassle.
                        </p>
                    </div>
                </section>



                {/* Social Section */}
                <footer className="pt-16 border-t border-white/10">
                    <div className="space-y-12">
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Follow me on:
                        </h3>
                        <div className="flex flex-wrap gap-x-12 lg:gap-x-24 gap-y-8">
                            {[
                                { name: 'BEHANCE', url: 'https://www.behance.net/mnithimnithi' },
                                { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/nitheshkumar-m?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                                { name: 'INSTAGRAM', url: 'https://www.instagram.com/__mr.stoic__?igsh=eTV4Z2s3YnJpbmh6' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target={social.url.startsWith('http') ? "_blank" : undefined}
                                    rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="text-[13px] font-black tracking-[0.2em] text-white hover:text-[#FF8139] transition-colors duration-200"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
