import React from 'react'
import logo from '../Assets/NS-Logo.png'
import '../Styling/Home.css'

const Logo = () => {
  return (
    <>
    <div className='behind-logo  d-flex justify-content-center'>
        <img className='logo mt-5' src={logo} alt='Logo'/>
    </div>
    <h3 className='wed-date text-center mt-5'>April 13-15 2023</h3>
    <h4 className='couple-names text-center'> <span className='hashtag'>#</span>NeilAndHisSeñoreena</h4>
    </>
  )
}

export default Logo