import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styling/Nav.css'




const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg"   id='mainbar'>
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
              
            <Nav.Item>
              <Nav.Link className='navlinks' href="#">Welcome</Nav.Link>

            </Nav.Item>

            <Nav.Item>
              <Nav.Link className='navlinks' href="#">Our Story</Nav.Link>

            </Nav.Item>            
            <Nav.Item>
              <Nav.Link className='navlinks' href="#">Event Details</Nav.Link>

            </Nav.Item>            
            <Nav.Item>
              <Nav.Link className='navlinks' href="#">Explore</Nav.Link>

            </Nav.Item>            
            
            <Nav.Item>
              <Nav.Link className='navlinks' href="#">Transport</Nav.Link>

            </Nav.Item>           
            
            <Nav.Item>
              <Nav.Link className='navlinks' href="#">Questions</Nav.Link>

            </Nav.Item>          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

  )
}

export default MainNav