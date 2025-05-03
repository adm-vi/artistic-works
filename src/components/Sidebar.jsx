import { useState, useRef } from 'react'
import artisticLogo from '../assets/artistic_logo.png'

const Sidebar = () => {
  const [isHovering, setIsHovering] = useState(false)
  const logoRef = useRef(null)

  return (
    <div className="w-1/3 bg-gradient-to-b from-slate-50 to-slate-100 rounded-md border border-slate-200 p-6">
      <div className="flex flex-col h-full">
        <div 
          className="inline-block perspective-[800px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img 
            ref={logoRef}
            src={artisticLogo} 
            alt="Artistic Logo" 
            className="w-44 h-auto mb-2 transition-all duration-300 cursor-pointer filter drop-shadow-none hover:drop-shadow-lg"
            style={{
              transform: isHovering ? 
                'rotateY(180deg) scale(1.1) translateY(-3px)' : 
                'rotateY(0deg)'
            }}
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">Creative Design Studio</h2>
          <p className="text-slate-600 font-light text-lg">Transforming ideas into beautiful experiences</p>
          
          <div className="h-0.5 w-16 bg-slate-300 my-6"></div>
          
          <p className="text-slate-700">
            We craft stunning digital experiences that captivate audiences and drive results.
            Our passion for design excellence sets us apart.
          </p>
          
          <button className="mt-4 px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
            Get Started
          </button>
        </div>
        
        <nav className="mt-auto pt-8">
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Portfolio</a></li>
            <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Services</a></li>
            <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">About Us</a></li>
            <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar 