import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import PasswordAlert from '../Components/PasswordAlert';



const Password = () => {
    const navigate = useNavigate()

   

   

    const [showAlert,setShowAlert] = useState(true)
    
    

  return (
    <Container fluid className='login'>
        <Row className='row1'>
            <PasswordAlert status={showAlert}/>
            <Col className='col1' sm={12} md={6} lg={3}>
                <Form className='form1'>
                    <Form.Group className="mb-3 pt-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  
                        onChange={(e)=> e.target.value === "nscabo23." ? navigate("/home") : setShowAlert(true)} 
                        type="text" placeholder="Password" />
                    </Form.Group>
                    {/* <Button onClick={passwordChecker}  id='submit-btn' type="submit">
                        Submit
                    </Button> */}
                </Form>

            </Col>
        </Row>
    </Container>
  )
}

export default Password