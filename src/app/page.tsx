import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-10 lg:px-44">
        {/* Logo */}
        <div className="flex items-center space-x-0.5 text-2xl font-black tracking-[-0.05em]">
          <span>NITHESH</span>
          <span>KUMAR M</span>
        </div>

        {/* Navigation Links and Contact Button - Right aligned */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {/* Navigation Links */}
          <div className="flex items-center space-x-6 lg:space-x-8 text-[10px] lg:text-[11px] font-semibold tracking-[0.15em] text-[#8a8a8a]">
            <a href="/" className="hover:text-white transition-colors duration-200">
              HOME
            </a>
            <a href="/about" className="hover:text-white transition-colors duration-200">
              ABOUT ME
            </a>
            <a href="/works" className="hover:text-white transition-colors duration-200">
              MY WORKS
            </a>
          </div>

          <Link
            href="/contact"
            className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all font-bold tracking-widest text-[11px]"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile menu icon (simplified) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight text-white">
            Adaptive Logo Design <br />
            for Your Brand
          </h1>

          <div className="flex justify-center pt-4">
            <Link
              href="/works"
              className="group flex items-center space-x-12 bg-[#FF8139] hover:bg-[#FF9747] text-white px-12 py-5 rounded-full text-[13px] font-black tracking-[0.2em] uppercase transition-all transform hover:scale-105"
            >
              <span>Explore Works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-8 group-hover:translate-x-2 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* About Me Section */}
      <section className="relative min-h-screen flex items-center px-10 lg:px-44 py-24 bg-black mx-auto">
        <div style={{ margin: "0 auto " }}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 text-left max-w-lg">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white tracking-tight">
              Let's get know <br />
              about me closer
            </h2>
            <div className="text-[#8a8a8a] text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
              <p>
                Aaronn is a New York-based visual designer focusing on branding
                and visual identity. Her portfolio showcases her wide range of
                work, spanning books, posters and web design.
              </p>
            </div>
            <div className="pt-4 flex justify-start">
              <Link
                href="/about"
                className="inline-block bg-[#FF8139] hover:bg-[#FF9747] text-white px-10 py-4 lg:py-5 rounded-full text-[13px] font-bold tracking-widest uppercase transition-all transform hover:scale-105"
              >
                Discover More About Me
              </Link>
            </div>
          </div>

          {/* Right Column - Image & Decorations */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/5">
              <img
                src="/about-portrait.png"
                alt="Aaronn Portrait"
                className="w-full h-auto object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Decorative Capsules */}
            <div className="absolute -top-[-10px] -right-6 w-32 h-10 border border-[#FF8139] rounded-full z-20 opacity-80" />
            <div className="absolute top-1/2 -left-10 w-12 h-32 border border-[#FF8139] rounded-full z-20 opacity-80" />
          </div>
        </div>
      </section>

      {/* Projects Highlight Section */}
      <section className="relative min-h-screen py-24 px-10 lg:px-44 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              My Projects Highlight
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {['UI/UX', 'REACT.JS', 'AI/ML'].map((filter) => (
                <button
                  key={filter}
                  className="px-8 lg:px-10 py-3 rounded-full border border-white/10 text-[11px] font-bold tracking-widest text-[#8a8a8a] hover:border-[#FF8139] hover:text-white transition-all transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-24">
            {/* Project 1 */}
            <div className="group space-y-6">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-square bg-[#0a0a0a] border border-white/5">
                <img
                  src="/project-1.png"
                  alt="Brand Journey Improvements"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl lg:text-2xl font-bold flex items-center">
                    Brand Journey Improvements
                    <span className="ml-4 w-10 h-[1.5px] bg-[#FF8139]"></span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group space-y-6">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-square bg-[#0a0a0a] border border-white/5">
                <img
                  src="/project-2.png"
                  alt="Brand Grouping"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl lg:text-2xl font-bold flex items-center">
                    Brand Grouping
                    <span className="ml-4 w-10 h-[1.5px] bg-[#FF8139]"></span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group space-y-6">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-square bg-[#0a0a0a] border border-white/5">
                <img
                  src="/project-3.png"
                  alt="NFT Glimps"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl lg:text-2xl font-bold flex items-center">
                    NFT Glimps
                    <span className="ml-4 w-10 h-[1.5px] bg-[#FF8139]"></span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group space-y-6">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-square bg-[#0a0a0a] border border-white/5">
                <img
                  src="/project-4.png"
                  alt="Brand Suggestions"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl lg:text-2xl font-bold flex items-center">
                    Brand Suggestions
                    <span className="ml-4 w-10 h-[1.5px] bg-[#FF8139]"></span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Overlay Removed - Handled by Hyperspeed */}
    </div>
  );
}
