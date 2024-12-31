import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [message , setMessage] = useState("")
  const navigate = useNavigate()

  const sendMessage = async () =>{
    let data = await fetch('http://localhost:5000/user/query' , {
      method : "post" , 
      body : JSON.stringify({name , email , message}),
      headers : {'Content-Type' : 'application/json' , authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}`}
    })
    let result = await data.json()
    if(result){
      alert('we will contact to you soon')
      navigate('/')
    }else{
      alert('something wrong')
    }
  }
  return (
   <>
       <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-red-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Name"
                  value={name} onChange={(e)=>{setName(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-red-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Email"
                  value={email} onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-red-600 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Message"
                  value={message} onChange={(e)=>{setMessage(e.target.value)}}
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={sendMessage}
                className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Roorkee Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.020783177455!2d77.8787223!3d29.8542639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb30ba97a7a79%3A0x65b5f35745e58ea!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1690736045343!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
