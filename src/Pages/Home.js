import React from 'react'
import MainNav from '../Components/MainNav'
import '../Styling/Home.css'
import Container from 'react-bootstrap/Container'
import Logo from '../Components/Logo'
import layer6 from '../Assets/Layer6.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import layer9 from '../Assets/Layer9.png'
import layer39 from '../Assets/Layer39.png'

import layer36 from '../Assets/Layer36.png'
import layer45 from '../Assets/Layer45.png'




const Home = () => {
  return (
    <>
    {/* Logo Section */}
    <Container fluid id='firstblock'>
        <MainNav/>
        <Logo/>
        {/* Couple Image */}
        <div className='d-flex mt-5 justify-content-end'>
            <img className='couplepic' src={layer6} alt='couple'/>
        </div>


    </Container>

    {/* Welcome Section */}
    <Container fluid className='welcome-section'>
        <h2 className='welcome-text mt-4 text-center'>Welcome</h2>
        <Row>
            <Col sm={12} md={6} lg={3} className='flowercol'>
                <img src={layer9} alt='flower'/>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <p className='welcome-par text-center'>Dear family and friends, the time has come <br/> To <span className='spantext'> raise the roof </span>  and have some <span className='spantext'> fun </span><br/>
            Feel it in your heart and feel it in your <span className='spantext'> soul </span> <br/> Let the music <span className='spantext'>take control </span> <br/>Everybody <span className='spantext'>sing </span>, everybody <span className='spantext'>dance </span> <br/>
            Lose yourself in wild romance <br/> We’re going to <br/> <span className='spantext'> Party, Love, Fiesta, Forever </span> <br/> Join us in Los Cabos!
            </p>
            </Col>
            <Col sm={12} md={6} lg={3} className='mapcol'>
                <img className='w-100' src={layer39} alt='layer39'/>
            </Col>
        </Row>
    </Container>



    {/* Our Story Section  */}
    <Container fluid >
        <h1 className='story-title'>Our Story</h1>
        <Row className='p-5'>
            <p className='storyline mt-2'>Neil saw Sareena for the first time at her 1st birthday party <br/>
                and sparks were flying. He knew immediately <br/>
                that one day she was going to be his wife.<br/>
                And the rest is history.
            </p>
            <p className='storyline mt-3'><i>False.That would be weird.</i></p>
        </Row>

        <Row className='couple2col p-5'>
            <Col  sm={12} md={6} lg={4}>
                <img src={layer36} alt='couple'/>
            </Col>
            <Col sm={12} md={6} lg={8}>
                <p className='longstory'>
                He actually thought to himself “when is this baby’s party going <br/>
                to be over so I can go home and play with my friends?” <br/>
                He was 7 after all and only attended because both their parents were good friends. <br/>

            
                </p>

                <p className='longstory'>Then for the next 22 years it would become the longest “friend zone”in history. <br/>
                They would see each other here and there for Diwali (Hindu new year),<br/>
                family friend dinners, birthday parties etc., stealing a glance every now and then,<br/>
                thinking “what if...” but then always leading their own separate lives.

                </p>

                <p className='longstory'>
                Until destiny, fed up at this point after 20 some years of unsuccessful attempts<br/>
                to get these two to match, finally brought them together in 2019 at none other<br/>
                than Neil’s brother Shaun’s wedding halfway around the world in Dubai!<br/>
                They connected back in LA after the wedding and this time the rest is history.

                </p>

                <p className='longstory'>
                 <i>A friendship (eventually) became a love story.</i>

                </p>
            </Col>
        </Row>
        

        {/* Story Continuation */}
        <Row>
            <Col className='p-5'>
            <p className='longstory '>

                Having graduated from USC, both Sareena and Neil <br/>
                bonded over that connection and shared a similar<br/>
                Indian-American upbringing in Southern California. <br/>
                And knowing their parents were already good friends<br/>
                made things that much easier. They immediately knew they<br/>
                were meant to be and it became clear to anyone who’s<br/>
                seen them together. Dating through a pandemic they grew closer, <br/>
                which led to Neil proposing in November 2021 in Laguna Beach, <br/>
                a special place they had visited on one of their very first dates.<br/>


                </p>

                <p className='longstory'>
                When you realize you want to spend the rest of your life with somebody, you want 
                the rest of your life to start as soon as possible. 
                 

                </p>

                <p className='longstory'>
                Having our loved ones join us in celebrating this destined match will add a layer 
                of rich memories to their story. 
                 
                </p>

                <p className='longstory'> <i>We invite you to join both families in the beautiful coastal destination Los Cabos!</i></p>
            </Col>

            <Col className='couple3 d-flex justify-content-end'>
                <img className='couple3pic' src={layer45} alt='couple3'/>
            </Col>


        </Row>
    </Container>
    


    </>
  )
}

export default Home