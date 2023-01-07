import React from 'react'
import MainNav from '../Components/MainNav'
import '../Styling/Home.css'
import Container from 'react-bootstrap/Container'
import Logo from '../Components/Logo'
import layer6 from '../Assets/Layer6.png'



const Home = () => {
  return (
    <>
    {/* Logo Section */}
    <Container fluid id='firstblock'>
        <MainNav/>
        <Logo/>
        {/* Couple Image */}
        <div className='d-flex mt-5 justify-content-end'>
            <img src={layer6} alt='couple'/>
        </div>


    </Container>

    {/* Welcome Section */}
    <Container>
        Hello
    </Container>
    


    </>
  )
}

export default Home