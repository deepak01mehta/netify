import React from 'react'
import './Navbar.css'
import logo from '../../assets/netifylogo.png'



import { Search ,Bell, User, Gift } from "lucide-react";






const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
       <img src={logo} alt="" />
       <ul>
        <li>Home</li>
        <li>Tv Show</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browser by Languages</li>

       </ul>
      </div>
      <div className="navbar-right">
          <Search />
          <p>Children</p>
          <Bell />
          <Gift />
          <div className="navbar-profile">

            <User />
         
          


          </div>


      </div>

    </div>
  )
}

export default Navbar