import React from "react";
import { Navbar, Container } from 'react-bootstrap';

export default class Nav extends React.Component{
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

          </Container>
          </Navbar>
        );

    }
}