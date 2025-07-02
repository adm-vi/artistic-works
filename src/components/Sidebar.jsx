import { useState } from 'react'
import artisticLogo from '../assets/artistic_logo.png'

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false)

  const mainLogoTransform = isHovered
    ? 'translate3d(-50px, 60px, 0) scale(0.4)'
    : 'translate3d(0, 0, 0) scale(1)'

  const smallLogoTransform = isHovered
    ? 'translate3d(60px, -30px, 0) scale(1.8)'
    : 'translate3d(0, 0, 0) scale(1)'

  return (
    <div className="w-full rounded-md p-6 font-coding">
      <div className="flex flex-col h-full items-center">
        <div className="relative w-full mb-8 flex flex-col items-center">
          <div className="relative">
            {/* Container for both logos */}
            <div 
              className="relative w-56"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Small logo positioned behind */}
              <img 
                src="/artistic_a.png" 
                alt="Artistic A Logo" 
                className="absolute inset-0 m-auto w-20 h-auto transition-all duration-700 ease-out"
                style={{ transform: smallLogoTransform }}
              />
              {/* Main logo with hover effect */}
              <img 
                src={artisticLogo} 
                alt="Artistic Works Logo" 
                className="relative w-full h-auto transition-all duration-700 ease-in-out cursor-pointer"
                style={{ transform: mainLogoTransform }}
              />
            </div>
          </div>
        </div>

        <div className="w-full md:space-y-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-slate-800 font-marker mb-4">VENTURE STUDIO</h2>
          <div className="h-0.5 w-16 bg-slate-300 mx-auto mb-4"></div>
          <p className="text-md md:text-md text-slate-600 font-turncoat max-w-md mx-auto">
            We're building a portfolio of consumer products & services primarily focused on supporting bootstrapped entrepreneurs.
            <br /><br />
            Expanding into physical goods, manufacturing, CPG, and retail.
            <br /><br />
            Anchored in Port Morris, The Bronx, NYC.
            <br /><br />
            <img 
              src="/images/Thumbtack.png" 
              alt="Thumbtack" 
              className="inline-block w-8 h-8 mb-2"
            />
            <br />
            <span className="text-slate-600 font-turncoat text-base md:text-lg lg:text-xl">alex@artisticworks.xyz</span>
          </p>
        </div>

        {/* Divider visible only on md+ screens */}
        {/* <div className="h-0.5 w-16 bg-slate-300 my-6 hidden md:block"></div>
        
        <div className="w-full text-center md:text-left">
          <p className="text-slate-700 text-sm md:text-base mt-4 md:mt-0">
            We craft stunning digital experiences that captivate audiences and drive results.
            Our passion for design excellence sets us apart.
          </p>
          <ul className="list-disc list-inside mt-4 text-slate-700 text-sm md:text-base">
            <li>creating & building [digital products, physical products, services]</li>
            <li>building beautiful products</li>
            <li>consulting/advising [startups, solopreneurs, students]</li>
            <li>developing [commercial & retail projects in NYC]</li>
            <li>community leadership [schools, nonprofits, councils, etc.]</li>
          </ul>
          
          <button className="mt-4 px-4 md:px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors text-sm md:text-base w-full md:w-auto mx-auto md:mx-0 font-coding">
            Get Started
          </button>
        </div> */}
        
        {/* <nav className="mt-auto pt-4 md:pt-8 w-full">
          <ul className="flex md:flex-col gap-3 md:gap-0 md:space-y-2 flex-wrap justify-center md:justify-start">
            <li><a href="#" className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">Services</a></li>
            <li><a href="#" className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">About Us</a></li>
            <li><a href="#" className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">Contact</a></li>
          </ul>
        </nav> */}
      </div>
    </div>
  )
}

export default Sidebar 