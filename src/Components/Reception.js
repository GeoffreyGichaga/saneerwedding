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
        <Modal.Body id='modal1'>
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

export default Reception