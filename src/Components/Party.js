import React from 'react'

import Modal from 'react-bootstrap/Modal';

import '../Styling/Party.css'


import disco from '../Assets/disco.jpeg'
import dubai from '../Assets/dubai.png'
import Button from 'react-bootstrap/Button';



import "../Styling/Dinner.css" 

// Disco & dubai



const Party = ({status,onClose}) => {




  return (
    <>
    <Modal show={status} fullscreen={true}>
        <Modal.Header className='d-block'>
          <Modal.Title className='title'>Sangeet & After Party</Modal.Title>
          <Button id='back-btns3' onClick={onClose}>Back</Button>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center'>
            <img className='w-100' src={disco} alt='dinner'/>
          </div>

          <div className='d-flex justify-content-center'>
            <img className='dubai ms-5' src={dubai} alt='dinner'/>
          </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default Party