import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4 md:py-16 flex flex-col min-h-screen gap-4 md:justify-center">
      {/* Flex container - column on mobile, row on md+ screens */}
      <div className="flex flex-col md:flex-row flex-1 gap-4">
        {/* Sidebar - full width on mobile, 1/3 on md+ screens */}
        <div className="w-full md:w-1/3">
          <Sidebar />
        </div>
        
        {/* Main content area - full width on mobile, 2/3 on md+ screens */}
        <div className="w-full md:w-2/3">
          {/* Grid - 1 column on mobile, 2 columns on md+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full py-4 font-turncoat text-center text-muted-foreground rounded-md mt-4">
        <p>
          Artistic Works, LLC. &copy; 2025
        </p>
      </footer>
    </div>
  )
}

export default Layout 