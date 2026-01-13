import Link from "next/link";

export default function ContactPage() {
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
                        <Link href="/about" className="hover:text-white transition-colors duration-200 uppercase">
                            About Me
                        </Link>
                        <Link href="/#works" className="hover:text-white transition-colors duration-200 uppercase">
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
            </nav>

            {/* Main Content */}
            <main className="pt-40 pb-24 px-10 lg:px-44 max-w-[1920px] mx-auto space-y-32">
                {/* Header Section */}
                <header className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none text-white">
                        Contact Me
                    </h1>
                    <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#8a8a8a] pl-2">
                        For Any Project Knock Us
                    </p>
                    <div className="w-full h-px bg-white/10 mt-12" />
                </header>

                {/* Form Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white max-w-sm">
                            Get in <br />
                            Touch With <br />
                            Us
                        </h2>
                    </div>

                    <form className="space-y-12">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black tracking-widest text-[#8a8a8a] uppercase">Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#FF8139] transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-black tracking-widest text-[#8a8a8a] uppercase">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#FF8139] transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-black tracking-widest text-[#8a8a8a] uppercase">Message</label>
                            <textarea
                                rows={1}
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#FF8139] transition-colors resize-none"
                            />
                        </div>
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="px-12 py-5 bg-[#FF8139] hover:bg-[#FF9747] text-white rounded-full text-[13px] font-black tracking-[0.2em] uppercase transition-all transform hover:scale-105"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </section>

                {/* Visual Image */}
                <section className="relative w-full aspect-[21/9] overflow-hidden rounded-[2.5rem] border border-white/5">
                    <img
                        src="/contact_laptop.png"
                        alt="Atmospheric laptop setup"
                        className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                    />
                </section>

                {/* Contact Details Footer */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 text-center md:text-left border-t border-white/10">
                    <div className="space-y-2">
                        <p className="text-[13px] font-black tracking-wider text-white">Street Avenue 21, CA</p>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-[13px] font-black tracking-wider text-white">+9 0283353</p>
                    </div>
                    <div className="space-y-2 text-right">
                        <p className="text-[13px] font-black tracking-wider text-white flex items-center justify-end">
                            info@nithesh.com
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
