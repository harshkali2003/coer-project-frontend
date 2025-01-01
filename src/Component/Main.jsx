import React , {useState} from 'react'
import BPM from '../Pages/BPM'
import { Link , useNavigate } from 'react-router-dom'

export default function Main() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [message , setMessage] = useState("")
  const navigate = useNavigate()

  const sendMessage = async () =>{
    let data = await fetch('http://localhost:5000/user/query' , {
      method : "post" , 
      body : JSON.stringify({name , email , message}),
      headers : {'Content-Type' : 'application/json'}
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
 <div className="bg-white text-red-600 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=pexels-thelazyartist-2247179.jpg&fm=jpg)' }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Transform Your Life with Fitness</h1>
          <p className="text-xl">Embrace the journey to a healthier, stronger you.</p>
          <button className="mt-6 px-8 py-3 bg-blue-500 text-gray-900 rounded-lg font-semibold hover:bg-blue-600">
           <Link to="/service"> Get Started</Link>
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-5">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Personal Training</h3>
            <p>Work one-on-one with expert trainers to achieve your fitness goals.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">BMI Calculator</h3>
            <p>we have integrated BMI calculator</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Nutrition Guidance</h3>
            <p>Get personalized meal plans to complement your fitness routine.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 text-gray-100 py-20 px-5">
      <BPM/>
      </section>

      {/* Query Form Section */}
      <section className="bg-white py-20 px-5 text-center">
        <h2 className="text-3xl font-bold mb-6">Have Questions? Contact Us</h2>
        <form className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              value={name} onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              value={email} onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              value={message} onChange={(e)=>{setMessage(e.target.value)}}
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={sendMessage}
            className="w-full px-4 py-2 bg-blue-500 text-gray-900 font-semibold rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>

    
    </div>
   </>
  )
}
