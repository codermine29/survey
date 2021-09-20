import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

export default class Nav1 extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
              <img
               alt=""
                src="/assets/images/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Survey
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Create</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
        );

    }
}