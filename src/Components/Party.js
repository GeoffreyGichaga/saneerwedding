import React from 'react'

import Modal from 'react-bootstrap/Modal';




import disco from '../Assets/disco.jpeg'
import dubai from '../Assets/dubai.png'


// Disco & dubai



const Party = ({status,onClose}) => {
  return (
    <>
    <Modal show={status} fullscreen={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title className='title'>Sangeet & After Party</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center'>
            <img className='w-75' src={disco} alt='dinner'/>
          </div>

          <div className='d-flex justify-content-center'>
            <img className='w-75' src={dubai} alt='dinner'/>
          </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default Party