import React from 'react'


function Navbar() {

    const handleNavigation = (path) => {
          window.location.href = path;
        };


  return (
    <div>
       <nav className="bg-gray-800 py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span
              className="text-white font-bold text-xl cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              News Website
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <span
                className="px-3 pt-10 rounded-md text-sm font-medium text-white bg-gray-900 cursor-pointer"
                onClick={() => handleNavigation('/')}
              >
                Home
              </span>
              <span
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => handleNavigation('/politics')}
              >
                Politics
              </span>
              <span
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => handleNavigation('/business')}
              >
                Business
              </span>
              <span
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => handleNavigation('/technology')}
              >
                Technology
              </span>
              <span
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => handleNavigation('/entertainment')}
              >
                Entertainment
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
