import React from 'react'
import "./Pages.css";
import logo from '../../Images/logo.png'
import shoes from '../../Images/shoes.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner__left">
          <img src={logo} alt='nike' className='banner__img'/>
                <h1>Shoes</h1>
                <p>at 30% off</p>
                <button className='check_btn'>Check now</button>
        </div>
        <div className="banner__right">
            <img src={shoes} alt='shoes'/>
        </div>
    </div>
  )
}

export default Banner