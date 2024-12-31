import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Main from "./Component/Main"
import About from "./Navigations/About"
import Faq from "./Pages/Faq"
import Contact from "./Pages/Contact"
import Services from "./Navigations/Services"
import Update from "./Pages/Update"
import Register from './Authentication/Register'
import Login from './Authentication/Login'
import Profile from './Authentication/Profile'


function App() {
 

  return (
    <>
   <BrowserRouter>
   <Navbar/>
 
   <Routes>
    <Route path="/" element={  <Main/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/faq" element={<Faq/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/service" element={<Services/>} />
    <Route path="/update/:id" element={<Update/>} />
    <Route path="/user/register" element={<Register/>} />
    <Route path="/user/log" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
