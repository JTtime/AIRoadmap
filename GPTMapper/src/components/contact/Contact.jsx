import React from 'react'
import Home from '../home/Home'
import './contact.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <Header/>
    {/* <Home/> */}
    <div className='section-1-outer' id='contact'>
      <div className='section-1-inner'>

      <div>
        <h2>Contact Us</h2>
      </div>
      <div>
        <ol>
            
            <li><Link to='/'><i class="icon_house_alt"></i> Home ‎ ‎ &gt; </Link></li>
            <li> ‎ ‎ Contact</li>
        </ol>
    </div>
      </div>
    </div>
    <div className='contact-area'>
      <div className='contact-area-container' >
        <div className='first'>
          <h2>Let's Work Together</h2>
        </div>
        <div className='second'>
          <div className='second-inner'>
            <p>Email</p>
            <a href='#'>jeevraj.vjti@gmail.com</a>
          </div>
          <div className='second-inner'>
            <p>Call Us</p>
            <a href='#'>+91-777777777</a>
          </div>
        </div>
        <div className='third'>
          <div className='second-inner'>
            <p>Visit Us</p>
            <a href='#'>Thane, Mumbai Suburbans</a>
          </div>
        </div>
      </div>

    </div>

    <div className='map-area'>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.762491687285!2d73.22436407379918!3d19.161871049273966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA5JzQyLjciTiA3M8KwMTMnMzcuMCJF!5e0!3m2!1sen!2sin!4v1711519372084!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Contact
