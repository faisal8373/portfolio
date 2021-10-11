import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css'
export default function topBar() {
    return (
        <div>
            {/* <div className="m-4"> */}
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light margn" variant='pills'>

  <Navbar bg="light" expand="lg">
  
  <Nav  defaultActiveKey="/">
      <div >
          
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>
          {/* <a href="#" className="navbar-brand">Brand</a> */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
          
              <div className="navbar-nav">
              
              <Nav.Item   className='bgColor' >
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item   className='bgColor'>
    <Nav.Link href="/aboutMe" eventKey="link-1">About Me</Nav.Link>
  </Nav.Item>
  <Nav.Item   className='bgColor'>
    <Nav.Link href="/projects" eventKey="link-2" >
      Projects
    </Nav.Link>
  </Nav.Item>
  <Nav.Item  className='bgColor'>
    <Nav.Link href="/skillSet" eventKey="link-3" >
      Skillset
    </Nav.Link>
  </Nav.Item>
  <Nav.Item  className='bgColor'>
    <Nav.Link href="/contactMe" eventKey="link-4" >
      Contact Me
    </Nav.Link>
  </Nav.Item>
  <Nav.Item   className='bgColor'>
    <Nav.Link eventKey="link-5" href='https://github.com/faisal8373' target="_blank">
      Github
    </Nav.Link>
  </Nav.Item>
                  {/* <a href="#" className="nav-item nav-link active">Home</a>
                  <a href="#" className="nav-item nav-link">Profile</a>
                  <a href="#" className="nav-item nav-link">Messages</a>
                  <a href="#" className="nav-item nav-link disabled" tabindex="-1">Reports</a> */}
              </div>
              {/* <div className="navbar-nav ms-auto">
                  <a href="#" className="nav-item nav-link">Login</a>
              </div> */}
          </div>
      </div>
      </Nav>
      
      </Navbar>
  </nav>
    
  </div>
        //  </div>
    )
}



