import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen gap-4">
      <div className="flex flex-1 gap-4">
        {/* Left sidebar */}
        <Sidebar />
        
        {/* Main content area */}
        <div className="w-2/3 grid grid-cols-2 gap-4">
          {children}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full py-4 text-center text-muted-foreground border border-slate-200 rounded-md mt-4">
        <p>
          Built with Vite, React, and Tailwind CSS
        </p>
      </footer>
    </div>
  )
}

export default Layout 