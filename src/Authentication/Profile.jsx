import React from 'react'
import { Link } from 'react-router-dom'


export default function Profile() {
    const auth = localStorage.getItem('User')
    const RemoveUser = (e) =>{
      e.preventDefault()
      localStorage.clear()
      navigate('/')
    }
  return (
  <>
     <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

          <div>
            <p className="mb-2">
              <strong>Name:{JSON.parse(auth).name}</strong>
            </p>
            <p className="mb-2">
              <strong>Email:{JSON.parse(auth).email}</strong>
            </p>
            

            
          </div>
          <button  onClick={RemoveUser} className='bg-red-600 m-2'>Log Out</button>
          <button className='bg-blue-500'><Link to={"/update/:id"}> UPDATE</Link></button>
        </div>
       
      </div>
  </>
  )
}
