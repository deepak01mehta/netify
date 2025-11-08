import React from 'react'
import './Navbar.css'
import logo from '../../assets/netifylogo.png'



import { Search ,Bell, User, Gift } from "lucide-react";






const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
       <img src={logo} alt="" className='logo' />
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
          <Search  className='search-icon'/>
          <p>Children</p>
          <Bell className='bell-icon' />
          <Gift className='gift-icon'/>
          <div className="navbar-profile">

            <User className='user-icon' />
            <div className='dropdown'>
              <p>Sign out</p>
            </div>
         
          


          </div>


      </div>

    </div>
  )
}

export default Navbar