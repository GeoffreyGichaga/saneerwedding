import React from 'react'
import Modal from 'react-bootstrap/Modal';
import '../Styling/Dinner.css'


import dinner from '../Assets/dinner.png'

import hollywood from '../Assets/hollywood.png'


const Dinner = ({status,onClose}) => {

    

  return (
    <>
    <Modal show={status} fullscreen={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title className='title'>Welcome Dinner & Mehndi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex justify-content-center'>
              <img className='w-75' src={dinner} alt='dinner'/>
              {/* <img className='w-75' src={hollywood} alt='dinner'/> */}
            </div>

            <div className='d-flex justify-content-center'>
              {/* <img className='w-75' src={dinner} alt='dinner'/> */}
              <img className='w-75' src={hollywood} alt='dinner'/>
            </div>

        </Modal.Body>
    </Modal>

    </>
  )
}

export default Dinner