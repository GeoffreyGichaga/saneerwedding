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


import layer44 from '../Assets/Layer44.png'
import layer19 from '../Assets/Layer19.png'

import layer63 from '../Assets/Layer63.png'


import layer30 from '../Assets/Layer30.png'
import layer291 from '../Assets/Layer291.png'
import layer29 from '../Assets/Layer29.png'



import layer48 from '../Assets/Layer48.png'
import layer50 from '../Assets/Layer50.png'


import layer51 from '../Assets/Layer51.png'







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





    {/* Event Details */}
    <Container fluid>
    {/* Heading */}

    <h1 className='details-title text-center'>Event Details</h1>
    <p className='details-par text-center'>As the event detais will be sent shortly ,Here is a small preview of what is to come</p>

    <Row className='p-5'>
        <Col>
        <h2 className='dates text-center'>APRIL 13</h2>
        <div className='d-flex justify-content-center mt-5 mb-5'>
            <img src={layer44} alt='pool'/>
            <img src={layer19} alt='plant'/>
        </div>
        <p className='timeline-titles text-center'><i>Welcome Dinner & Mehndi</i></p>

        </Col>

        <Col>
        <h2 className='dates text-center'>APRIL 14</h2>

        <div className='dancingcouple d-flex justify-content-center mt-5'>
            <img src={layer63} alt='dance'/>
        </div>
        <p className='timeline-titles text-center'><i>Sangeet & After Party</i></p>
        </Col>


        <Col>
        <h2 className='dates text-center'>APRIL 15</h2>
        <div className='d-flex justify-content-center mt-5 mb-3'>
            <img src={layer30} alt='rings'/>
            <div>
                <img src={layer291} alt='glass1'/>
                <img src={layer29} alt="glass"/>
            </div>
        </div>
        <p className='timeline-titles text-center'><i>Wedding & Reception</i></p>
        </Col>
    </Row>
    </Container>



    {/* Explore */}
    <Container>
        <h1 className='explore-title'>Exploring Los Cabos</h1>
        <Row>
            <p className='explore-par text-center'>
            Conveniently located only 25 minutes from the Los Cabos International Airport, the Hotel is perfectly <br/>
            situated in the heart of San Jose del Cabo. You can enjoy the traditional, authentic Mexican<br/>
            downtown area offering an abundance of things to do, including visiting the Mission Site, browsing<br/>
            international art galleries, enjoying the nightlife and wonderful boutique shops, and, of course,<br/>
            tasting the world-famous culinary tourism specialized in Baja California fusions<br/>

            Activities at the Hotel
            </p>
        </Row>
        <h3 className='text-center'>ACTIVITIES AT THE HOTEL</h3>


        <Row>
            <Col sm={12} md={6} lg={3}>
                <img src={layer48} alt='grass'/>
            </Col>


            <Col sm={12} md={6} lg={9}>
            <p>A Masterpiece in 27 Holes</p>
            <p>
                One of the most unique golf experiences in all of Los Cabos with stunning views of the Sea of <br/>
                Cortez from 70% of the golf course. With two comfort stations on each 9 serving food and <br/>
                beverages, you are never more than a couple of holes away from your next taco or margarita.<br/>
                Wedding rate offers you 15% discount
            </p>
            </Col>
        </Row>


        <Row>
            <Col sm={12} md={6} lg={9}>
                <p className='text-end'>Jasha Spa</p>

                <p className='text-end'>Jasha Spa, the hotel’s resort spa in San Jose del Cabo and the most luxurious in Los Cabos,<br/>
                offers many blissful services daily to take your increase your leisure. Services include hair and<br/>
                scalp treatments, massages, indoor pools, jacuzzis and more.<br/>
                Please contact the Spa directly for your appointments at Extension #2061.<br/>
                Wedding rate offers you 20% discount</p>

                <p className='text-end'>Jasha Beauty Salon</p>
                <p className='text-end'>We'll update the hair & makeup information as we get closer.</p>
            </Col>

            <Col sm={12} md={6} lg={3}>
                <img src={layer50} alt='pot'/>
            </Col>
        </Row>



        <Row>
            <Col>
            <img src={layer51} alt='rainbow'/>
            </Col>

            <Col>
            <p className='text-start'>Nayaa Kids Club</p>
            <p className='text-start'>
                Timings - 9:00 am through 17:00 pm<br/>
                For more information, you may contact the Kids Club at Ext. 2050 <br/>
                For children under the age of four, please contact the Concierge at Ext. 2016 to assist you with a<br/>
                Baby Sitting service.
            </p>
            </Col>
        </Row>



        {/* Things to do  */}
    </Container>

    


    </>
  )
}

export default Home