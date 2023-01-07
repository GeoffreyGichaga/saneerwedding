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
        <h2 className='welcome-text mt-4 text-center'>Welcome</h2>
        <p className='text-center'>Dear family and friends, the time has come <br/> To <span className='spantext'> raise the roof </span>  and have some <span className='spantext'> fun </span><br/>
            Feel it in your heart and feel it in your <span className='spantext'> soul </span> <br/> Let the music <span className='spantext'>take control </span> <br/>Everybody <span className='spantext'>sing </span>, everybody <span className='spantext'>dance </span> <br/>
            Lose yourself in wild romance <br/> We’re going to <br/> <span className='spantext'> Party, Love, Fiesta, Forever </span> <br/> Join us in Los Cabos!
        </p>
    </Container>
    


    </>
  )
}

export default Home