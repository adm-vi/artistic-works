import { useState, useRef } from 'react'
import artisticLogo from '../assets/artistic_logo.png'

const Sidebar = () => {
  const [isHovering, setIsHovering] = useState(false)
  const logoRef = useRef(null)

  return (
    <div className="w-full rounded-md p-6">
      <div className="flex flex-col h-full">
        <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
          <div 
            className="inline-block perspective-[800px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img 
              ref={logoRef}
              src={artisticLogo} 
              alt="Artistic Logo" 
              className="w-20 md:w-44 h-auto mb-2 transition-all duration-300 cursor-pointer filter drop-shadow-none hover:drop-shadow-lg"
              style={{
                transform: isHovering ? 
                  'rotateY(180deg) scale(1.1) translateY(-3px)' : 
                  'rotateY(0deg)'
              }}
            />
          </div>
          
          <div className="md:space-y-4">
            <h2 className="text-xl md:text-3xl font-bold text-slate-800">Venture Incubator</h2>
            <p className="text-sm md:text-lg text-slate-600 font-light hidden md:block">Transforming ideas into beautiful experiences</p>
          </div>
        </div>
        
        {/* Divider visible only on md+ screens */}
        <div className="h-0.5 w-16 bg-slate-300 my-6 hidden md:block"></div>
        
        <p className="text-slate-700 text-sm md:text-base mt-4 md:mt-0 text-center md:text-left">
          We craft stunning digital experiences that captivate audiences and drive results.
          Our passion for design excellence sets us apart.
        </p>
        
        <button className="mt-4 px-4 md:px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors text-sm md:text-base w-full md:w-auto mx-auto md:mx-0">
          Get Started
        </button>
        
        <nav className="mt-auto pt-4 md:pt-8">
          <ul className="flex md:flex-col gap-3 md:gap-0 md:space-y-2 flex-wrap justify-center md:justify-start">
            <li><a href="#" className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">Portfolio</a></li>
            <li><a href="#" className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">Services</a></li>
            <li><a href="#" className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">About Us</a></li>
            <li><a href="#" className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar 