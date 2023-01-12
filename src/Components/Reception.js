import React from 'react'
import Modal from 'react-bootstrap/Modal';

import hollywood from '../Assets/hollywood.png'


import wedding from '../Assets/wedding.png'
import paris from '../Assets/paris.png'


// wedding & paris

const Reception = ({status,onClose}) => {
  return (
    <>
    <Modal show={status} fullscreen={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title className='title'>Wedding & Reception</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <div>
            <img className='w-75' src={wedding} alt='dinner'/>
            <img className='w-75' src={paris} alt='dinner'/>


          </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default Reception