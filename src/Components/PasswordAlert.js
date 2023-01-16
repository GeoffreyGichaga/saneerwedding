import React from 'react'
import Alert from 'react-bootstrap/Alert'



const PasswordAlert = ({status}) => {
  return (
    <Alert show={status} variant="danger">
            Wrong Password!!!!

    </Alert>
  )
}

export default PasswordAlert