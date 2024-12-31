import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Footer() {
  const [email , setEmail] = useState("")
  const navigate = useNavigate()
  const subscribeUser = async (e) =>{
    let data = await fetch('http://localhost:5000/user/subscribe' , {
      method : "post" , 
      body : JSON.stringify({email}),
      headers : {'Content-Type' : 'application/json' , authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}`}
    })
    let result = await data.json()
    if(result){
      navigate('/')
      alert('subscribed successfully')
    }
  }
  return (
   <>
    <footer className="bg-black text-red-600 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-2xl font-bold mb-4">STAY ON TRACK</h2>
          <p className="text-red-600">
            all yours needs to be completed at one place
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
          
            <li>
              <Link to="/about" className="text-red-600 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-red-600 hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-red-600 hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-red-600 mb-4">Subscribe to our newsletter for updates.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              value={email} onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              onClick={subscribeUser}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

    
      <div className="border-t border-gray-700 mt-8"></div>

     
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="flex space-x-4">
          <Link
            href="#"
            className="text-red-600 hover:text-white transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            href="#"
            className="text-red-600 hover:text-white transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <a
            href="#"
            className="text-red-600 hover:text-white transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <Link
            href="#"
            className="text-red-600 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
        <p className="text-white mt-4 md:mt-0">
          © 2025 STAY ON TRACK. All rights reserved.
        </p>
      </div>
    </footer>
   </>
  )
}
