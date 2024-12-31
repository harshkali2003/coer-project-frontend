import React , {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const auth = localStorage.getItem("User");
   
  return (
  <>
  <nav className="bg-black text-red-600 shadow-md sticky top-0">
        <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
            <span className="font-thin">STAY ON TRACK</span>
          </div>
        
           
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
         
       
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:items-center`}
          >
            <ul className="lg:flex lg:space-x-6 text-lg">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-white rounded-md"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="block px-4 py-2  hover:bg-white rounded-md"
                >
                  SERVICES
                </Link>
              </li>
             
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2  hover:bg-white rounded-md"
                >
                  ABOUT US
                </Link>
              </li>
              {auth ? (
                <>
                  
                  <li>
                    <button
                   
                      className="block px-4 py-2  hover:bg-white rounded-md"
                    >
                     <Link to='/profile'>{JSON.parse(auth).name} </Link> 
                    </button>
                  </li>

                </>
              ) : (
                <li>
                  <Link
                    to="/user/log"
                    className="block px-4 py-2  hover:bg-white rounded-md"
                  >
                    REGISTER
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
  </>
  )
}
