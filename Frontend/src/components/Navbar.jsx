import React from "react";
import { Link } from "react-router-dom";
import { deleteCookie, getCookie } from "../utils/cookies";

const Navbar = () => {
  const handleLogout=()=>{
    deleteCookie('auth-token')
    deleteCookie('email')
    setTimeout(()=> {
      window.location = "/"
    }, 0);
    
   
  }

  const userCookie = getCookie("email")
  
  console.log("userCookie:",userCookie)
  
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        width: "100%",
        position: "absolute",
        top: "0",
      }}
    >
      <div className="antialiased bg-gray-500 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div
            x-data="{ open: true }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div className="flex flex-row items-center justify-between p-4">
              
                <a
                  href="/"
                  className="text-2xl font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >
                  WEIRD INVENTIONS 🤯
                </a>
              
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => {}}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
              {/* <Link to="/posts">
              
              <a
                className="px-4 py-2 mt-2 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                
              >
                Posts
              </a>
              </Link> */}
              {!userCookie ? 

              <div style={{ display: 'flex', alignItems: 'center' }}> 
                <Link to="/login"> 
              
              <a
                className="px-4 py-2 mt-2 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#Þ"
                
              >
                Login
              </a>
              </Link>
              <Link to="/signup">
              <a
                className="px-4 py-2 mt-10 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                
              >
                Signup
              </a>
              </Link>
              </div>
              : 
              
              
              <a
                className="px-4 py-2 mt-10 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                
                
              >
                <button onClick={handleLogout} >Logout</button>
              </a>}
              <Link to="/posts">
              <a
                className="px-4 py-2 mt-10 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                style={{ display: 'flex', alignItems: 'center' }}
                
              >
                Posts
              </a>
              </Link>

              
            
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
