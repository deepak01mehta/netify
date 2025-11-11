import React from 'react'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import title from '../../assets/title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from'../../assets/info_icon.png'
import { TitleCards } from '../../component/Navbar/TitleCards/TitleCards.jsx'
import { Footer } from '../../component/Navbar/Footer/Footer.jsx'



function Home() {
  return (
    <div className='home'>
       <Navbar /> 
       <div className="hero">
        <img  className='banner-img' src={hero_banner } alt="" />
        <div className="hero-caption">
          <img src={title} alt="" className='caption-img'/>
          <p>Discovring his ties to a secret ancient order ,a young man living
            in modern Istanbul embarks on a quest to save the city form an immotal enemy
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>

          </div>
          <TitleCards />
        </div>
       </div>
       <div className="more-card">
        <TitleCards title={"Blockbuster Movies "} />
        <TitleCards  title={"Only on Netify"}/>
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
       </div>
       <Footer />
    </div>
  )
}

export default Home