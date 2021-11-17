import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
export default function Navigation(props) {
    if (props.data === "cv") {
        var classname = " header-blue"
        var top="top"
        var link = '/'
       var height='200px'
    } else {
         classname = " "
         link = '/'
         top =""
    }  
    return (
        <Navbar style={{height:{height}}} className={classname} fixed={top} navigation="clean" bg="transparent" expand="md">
            <Container>
                <Navbar.Brand href="/"><img style={{height:'90px'}} src="./assets/img/f.png"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="collapse navbar-collapse text-center justify-content-center align-items-center" id="basic-navbar-nav">
                    <Nav >
                        <Nav.Item>
                        <Nav.Link className="navlink" closeVarient='white' href="/cv ">Curriculum vitae</Nav.Link></Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="navlink" href={`${link} #project`}>Project</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="navlink"  href={`${link} #contact`}>Contact</Nav.Link>
                        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
