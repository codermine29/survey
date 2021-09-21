import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Flex, Box, Text } from '@blockstack/ui';
import {Auth} from '../Header'
import { getPerson, getUserData, userSession } from '../../auth';
import {
  BrowserRouter as Router,
  Route, Link
} from "react-router-dom";
 
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
              <Link to='/create'>Create</Link>
            </Nav>
          </Navbar.Collapse>
          <Auth></Auth>
          </Navbar.Collapse>
          </Container>
          </Navbar>
        );

    }
}