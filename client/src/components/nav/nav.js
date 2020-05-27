import React, { Component } from 'react';
import './nav.css';
import { Navbar, Nav } from 'react-bootstrap'

export class Navigation extends Component {
  render() {
    return (
      <div class="navbar">
        <Navbar bg="light" fixed="top">
          <Navbar.Brand href="#home">wellnest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link1">Link 1</Nav.Link>
              <Nav.Link href="#link2">Link 2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;