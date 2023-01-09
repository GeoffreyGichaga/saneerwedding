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
          <Nav className="d-flex justify-content-center">
            <Nav.Link className='navlinks' href="#">Welcome</Nav.Link>
            <Nav.Link className='navlinks' href="#">Our Story</Nav.Link>
            <Nav.Link className='navlinks' href="#">Event Details</Nav.Link>
            <Nav.Link className='navlinks' href="#">Explore</Nav.Link>
            <Nav.Link className='navlinks' href="#">Transport</Nav.Link>
            <Nav.Link className='navlinks' href="#">Questions</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link className='navlinks' href="#">Explore</Nav.Link>
            <Nav.Link className='navlinks' href="#">Transport</Nav.Link>
            <Nav.Link className='navlinks' href="#">Questions</Nav.Link>

          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

  )
}

export default MainNav