import React from 'react'
import Modal from 'react-bootstrap/Modal';
import '../Styling/Dinner.css'


import dinner from '../Assets/dinner.png'

import hollywood from '../Assets/hollywood.png'
import Button from 'react-bootstrap/esm/Button';



import disco from '../Assets/disco.jpeg'
import dubai from '../Assets/dubai.png'


import wedding from '../Assets/wedding.png'
import paris from '../Assets/paris.png'
 
const Dinner = ({status,onClose}) => {

    

  return (
    <>
    <Modal show={status} fullscreen={true}>
        <Modal.Header className='d-block'>
          <Modal.Title className='title'>Event Details</Modal.Title>
          <Button id='back-btns1' onClick={onClose}>Back</Button>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex justify-content-center'>
              <img className='w-75' src={dinner} alt='dinner'/>
              {/* <img className='w-75' src={hollywood} alt='dinner'/> */}
            </div>

            <div className='d-flex justify-content-center mt-5'>
              {/* <img className='w-75' src={dinner} alt='dinner'/> */}
              <img className='w-100' src={hollywood} alt='dinner'/>
            </div>




          {/* Sangeet & After party */}
            <div className='d-flex justify-content-center'>
            <img className='w-100' src={disco} alt='dinner'/>
          </div> 

          <div className='d-flex justify-content-center'>
            <img className='dubai ms-sm-5 ms-lg-5' src={dubai} alt='dinner'/>
          </div>

          {/* Reception */}

          <div className='d-flex justify-content-center'>
            <img className='w-100' src={wedding} alt='dinner'/>
          </div>

          <div className='d-flex justify-content-center'>
            <img className='w-100' src={paris} alt='dinner'/>
          </div>

        </Modal.Body>
    </Modal>

    </>
  )
}

export default Dinner