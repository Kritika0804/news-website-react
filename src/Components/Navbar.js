import React,{useState} from 'react'


function Navbar() {

  const [navbar, setNavbar] = useState(false);
  // return (
  //   <div>
  //      <nav className="bg-gray-800 py-10">
  //     <div className="mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center justify-between h-16">
  //         <div className="flex items-center">
  //           <span
  //             className="text-white font-bold text-xl cursor-pointer"
  //             onClick={() => handleNavigation('/')}
  //           >
  //             News Website
  //           </span>
  //         </div>
  //         <div className="hidden md:block">
  //           <div className="ml-10 flex items-baseline">
  //             <span
  //               className="px-3 pt-10 rounded-md text-sm font-medium text-white bg-gray-900 cursor-pointer"
  //               onClick={() => handleNavigation('/')}
  //             >
  //               Home
  //             </span>
  //             <span
  //               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
  //               onClick={() => handleNavigation('/politics')}
  //             >
  //               Politics
  //             </span>
  //             <span
  //               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
  //               onClick={() => handleNavigation('/business')}
  //             >
  //               Business
  //             </span>
  //             <span
  //               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
  //               onClick={() => handleNavigation('/technology')}
  //             >
  //               Technology
  //             </span>
  //             <span
  //               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer"
  //               onClick={() => handleNavigation('/entertainment')}
  //             >
  //               Entertainment
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  //   </div>
  // )
  return(
    <nav className="w-full  shadow  bg-purple-800 text-white">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block text-white">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold">News Today</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                              {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                            </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center text-white justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Bussiness</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Technology</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Sports</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Health</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Science</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
