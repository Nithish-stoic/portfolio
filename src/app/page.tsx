import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-10 lg:px-44">
        {/* Logo */}
        <div className="flex items-center space-x-0.5 text-2xl font-black tracking-[-0.05em]">
          <span>NITHESH
            KUMAR M</span>
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
            <Link href="/works" className="hover:text-white transition-colors duration-200">
              MY WORKS
            </Link>
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
      <section id="works" className="relative min-h-screen py-24 px-10 lg:px-44 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white">
              My Projects Highlight
            </h2>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {['UI/UX', 'REACT.JS', 'AI/ML'].map((filter) => (
                <button
                  key={filter}
                  className="px-8 lg:px-10 py-3 rounded-full border border-[#FF8139] text-[11px] font-bold tracking-[0.2em] text-white hover:bg-[#FF8139] transition-all uppercase"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-24">
            {/* Project 1 */}
            <Link href="/works/brand-journey" className="group space-y-6 block">
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
            </Link>

            {/* Project 2 */}
            <Link href="/works/brand-grouping" className="group space-y-6 block">
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
            </Link>

            {/* Project 3 */}
            <Link href="/works/nft-glimps" className="group space-y-6 block">
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
            </Link>

            {/* Project 4 */}
            <Link href="/works/brand-suggestions" className="group space-y-6 block">
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
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative min-h-screen py-24 px-10 lg:px-44 bg-black">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl lg:text-5xl font-black text-white leading-tight">
              Skills that fuel my <br />
              passion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Front-End Development */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-12 h-12 bg-[#E34F26]/10 rounded-xl flex items-center justify-center p-2.5">
                    <img src="https://cdn.simpleicons.org/html5/E34F26" alt="Html5" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 bg-[#F7DF1E]/10 rounded-xl flex items-center justify-center p-2.5">
                    <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JS" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 bg-[#3178C6]/10 rounded-xl flex items-center justify-center p-2.5">
                    <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TS" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center p-2.5">
                    <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 bg-[#764ABC]/10 rounded-xl flex items-center justify-center p-2.5">
                    <img src="https://cdn.simpleicons.org/redux/764ABC" alt="Redux" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 bg-[#61DAFB]/10 rounded-xl flex items-center justify-center p-2.5">
                    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-full h-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Front-End Development</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.
                  </p>
                </div>
              </div>

              {/* Back-End Development */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-4 gap-4">
                  <div className="w-10 h-10 bg-[#339933]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node" className="w-full h-full" />
                  </div>
                  {/* <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/express/white" alt="Express" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#092E20]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/django/092E20" alt="Django" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/flask/white" alt="Flask" className="w-full h-full" />
                  </div> */}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Back-End Development</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Developing robust server-side logic and APIs to power dynamic and scalable web applications.
                  </p>
                </div>
              </div>

              {/*  Core Computer Science Concepts */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-2 gap-3">
                  {['Operating Systems', 'Computer Networks', 'Object-Oriented Programming', 'System Design'].map((skill) => (
                    <span key={skill} className="px-4 py-3 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-[#8a8a8a] text-center">
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Core Computer Science Concepts</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.
                  </p>
                </div>
              </div>

              {/* Personal Development
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-2 gap-3">
                  {['Time Management', 'Problem Solving', 'Communication', 'Leadership'].map((skill) => (
                    <span key={skill} className="px-4 py-3 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-[#8a8a8a] text-center">
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Personal Development</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Committed to continuous learning and personal growth to excel in both professional and collaborative environments.
                  </p>
                </div>
              </div> */}
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* Styling & Design */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2">
                    <img src="https://skillicons.dev/icons?i=css" alt="CSS3" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2">
                    <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2">
                    <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" className="w-full h-full" />
                  </div>
                  {/* <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2">
                    <img src="https://skillicons.dev/icons?i=sass" alt="Sass" className="w-full h-full" />
                  </div> */}
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2">
                    <img src="https://skillicons.dev/icons?i=mui" alt="MUI" className="w-full h-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Styling & Design</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Crafting visually appealing and responsive designs with advanced styling tools and frameworks.
                  </p>
                </div>
              </div>

              {/* Web Animations */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-10 h-10 bg-[#0055FF]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/framer/0055FF" alt="Framer" className="w-full h-full" />
                  </div>
                  {/* <div className="w-10 h-10 bg-[#88CE02]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/greensock/88CE02" alt="GSAP" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#FFD700]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/spline/FFD700" alt="Spline" className="w-full h-full" />
                  </div> */}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Web Animations</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Creating seamless animations and transitions to enhance user engagement and interactivity.
                  </p>
                </div>
              </div>

              {/* Cloud & Deployment */}
              {/* <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8 text-center sm:text-left">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  <div className="w-10 h-10 bg-[#2496ED]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#0078D4]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/microsoftazure/0078D4" alt="Azure" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#FF9900]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/amazonaws/white" alt="AWS" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#4285F4]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/googlecloud/4285F4" alt="GCP" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/vercel/white" alt="Vercel" className="w-full h-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Cloud & Deployment</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Experienced in deploying and managing applications using modern cloud platforms and tools.
                  </p>
                </div>
              </div> */}

              {/* Testing & Debugging */}
              {/* <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-10 h-10 bg-[#C21325]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/jest/C21325" alt="Jest" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#0A9EDC]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/pytest/0A9EDC" alt="Pytest" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#43B02A]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/selenium/43B02A" alt="Selenium" className="w-full h-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Testing & Debugging</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Ensuring code quality and reliability through rigorous testing and debugging processes.
                  </p>
                </div>
              </div> */}

              {/* Personal Development */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-2 gap-3">
                  {['Time Management', 'Problem Solving', 'Communication', 'Leadership'].map((skill) => (
                    <span key={skill} className="px-4 py-3 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-[#8a8a8a] text-center">
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Personal Development</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Committed to continuous learning and personal growth to excel in both professional and collaborative environments.
                  </p>
                </div>
              </div>

            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              {/* Programming Languages */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-4 gap-4">
                  <div className="w-10 h-10 bg-[#3776AB]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-full h-full" />
                  </div>
                  {/* <div className="w-10 h-10 bg-[#A8B9CC]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/c/A8B9CC" alt="C" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#00599C]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/cplusplus/00599C" alt="C++" className="w-full h-full" />
                  </div> */}
                  <div className="w-10 h-10 bg-[#F7DF1E]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JS" className="w-full h-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Programming Languages</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.
                  </p>
                </div>
              </div>

              {/* Database Management */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="grid grid-cols-4 gap-4">
                  <div className="w-10 h-10 bg-[#4479A1]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" className="w-full h-full" />
                  </div>
                  {/* <div className="w-10 h-10 bg-[#4169E1]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="Postgres" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 bg-[#47A248]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" className="w-full h-full" />
                  </div> */}
                  <div className="w-10 h-10 bg-[#FFCA28]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" className="w-full h-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Database Management</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Designing and managing databases to ensure secure and efficient data storage and retrieval.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Mobile App Development */}
                <div className="bg-[#111111] p-8 rounded-[2rem] border border-white/5 space-y-6">
                  <div className="w-10 h-10 bg-[#61DAFB]/10 rounded-xl flex items-center justify-center p-2">
                    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React Native" className="w-full h-full" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold leading-tight">Mobile App Development</h3>
                    <p className="text-[#8a8a8a] text-[10px] leading-relaxed">
                      Creating cross-platform mobile apps with sleek designs and robust functionality.
                    </p>
                  </div>
                </div>
                {/* Version Control */}
                <div className="bg-[#111111] p-8 rounded-[2rem] border border-white/5 space-y-6 text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start gap-2">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center p-1.5">
                      <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-full h-full" />
                    </div>
                    <div className="w-8 h-8 bg-[#F05032]/10 rounded-lg flex items-center justify-center p-1.5">
                      <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="w-full h-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold leading-tight">Version Control & Collaboration</h3>
                    <p className="text-[#8a8a8a] text-[10px] leading-relaxed">
                      Effectively managing code and collaborating on projects to ensure seamless teamwork.
                    </p>
                  </div>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="w-12 h-12 bg-[#F24E1E]/10 rounded-xl flex items-center justify-center p-2.5">
                    <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-full h-full" />
                  </div>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-[#8a8a8a]">PROTOTYPING</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-[#8a8a8a]">WIREFRAMING</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">UI/UX Design</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Mission & About Section */}
      <section className="relative min-h-screen py-24 px-10 lg:px-44 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="space-y-4 mb-24">
            <h1 className="text-6xl md:text-5xl font-black tracking-tight leading-none text-white">
              About Me
            </h1>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#8a8a8a] pl-2">
              Little Brief About Myself
            </p>
            <div className="w-full h-px bg-white/10 mt-12" />
          </header>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-40">
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
          </div>

          {/* Detailed Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-40">
            {/* Portrait 1 */}
            <div className="relative group">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/5 aspect-[4/5] sm:aspect-auto">
                <img
                  src="/hoodie_portrait.png"
                  alt="Portrait with hoodie"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute top-1/2 -left-6 w-8 h-24 border border-[#FF8139] rounded-full z-20 opacity-60" />
              <div className="absolute -top-4 -left-4 w-24 h-8 border border-[#FF8139]/30 rounded-full z-0" />
            </div>

            {/* Portrait 2 */}
            <div className="relative group md:mt-24">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/5 aspect-[4/5] sm:aspect-auto">
                <img
                  src="/casual_portrait.png"
                  alt="Casual portrait"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-10 border border-[#FF8139] rounded-full z-20 opacity-60" />
              <div className="absolute -bottom-10 -right-2 w-10 h-32 border border-[#FF8139]/30 rounded-full z-0" />
            </div>
          </div>


        </div>
      </section>

      {/* Background Overlay Removed - Handled by Hyperspeed */}

      {/* Background Overlay Removed - Handled by Hyperspeed */}
    </div>
  );
}
