import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import PasswordAlert from '../Components/PasswordAlert';
import Button from 'react-bootstrap/Button'

import plane from '../Assets/plane.png'




const Password = () => {
    const navigate = useNavigate()

   


    const [showAlert,setShowAlert] = useState(false)
    const [pswd,setPswd] = useState("")

    const handleSubmit=()=>{
        const pass = "nscabo23"

        if(pass === pswd){
            navigate("/home")
        }
        else{
            setShowAlert(true)

        }
        
    }  

   
   
  return (
    <Container fluid className='login'>
        <PasswordAlert status={showAlert}/>

        <Row className='mt-5'>
            <Col className='mt-5'>
                <h1 className='password-title mt-5'>Get ready to <span className='take-off '> take off</span> for </h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <h1 className='password-name mt-5'>NEIL & SAREENA </h1>
            </Col>
        </Row>
        <Row className='row1 mt-5 ms-5 d-flex justify-content-center'>
            <Col className='col1' sm={12} md={6} lg={3}>
                <Form className='form1 mt-4'>
                    {/* <Form.Group className="mb-3 pt-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  
                        onChange={(e)=> e.target.value === "nscabo2023" ? navigate("/home") : setShowAlert(true)} 
                        type="text" placeholder="Password" />
                    </Form.Group> */}

                     <Form.Group className="mb-3 pt-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        value={pswd}
                        onChange={(e)=> setPswd(e.target.value)} 
                        type="password" placeholder="Password" />
                    </Form.Group>

                    
                    <Button onClick={handleSubmit}  id='submit-btn' type="submit">
                        Submit
                    </Button>
                </Form>

            </Col>
        </Row>

        <Row>
            <Col className='d-flex justify-content-end' lg={10}>
                    <img className='plane' src={plane} alt='plane'/>
            </Col>
        </Row>
    </Container>
  )
}

export default Password