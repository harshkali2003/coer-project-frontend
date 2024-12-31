import React from 'react'

export default function About() {
  return (
   <>
   <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?team,fitness)' }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Dedicated to Helping You Achieve Your Fitness Goals</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-20 px-5 text-center">
        <h2 className="text-3xl font-bold mb-6">WHO WE ARE</h2>
        <p className="max-w-3xl mx-auto mb-10">
          At FitnessPro, we are a passionate team of fitness enthusiasts committed to empowering individuals on their journey to health and well-being. With expert trainers, state-of-the-art facilities, and personalized programs, we provide the tools and support you need to transform your lifestyle.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto mb-10">
          Our mission is to inspire and enable a healthier world by delivering exceptional fitness services and fostering a community of like-minded individuals striving for growth and positivity.
        </p>

        <h2 className="text-3xl font-bold mb-6">OUR TEAM</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Harsh Vardhan</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Ashu Jaiswal</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Aman Jaiswal</h3>
            <p>Database Engineer</p>
          </div>
        </div>
      </section>

     
    </div>
   </>
  )
}
