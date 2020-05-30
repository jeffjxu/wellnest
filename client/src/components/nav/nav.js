import React, { Component } from 'react';
import './nav.css';
import { Navbar, Nav } from 'react-bootstrap'

export class Navigation extends Component {
  render() {
    return (
      <div class="navbar">
        <Navbar bg="light">
          <Navbar.Brand href="/">wellnest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/mailinglist">Mailing List</Nav.Link>
              <Nav.Link href="#link2">Link 2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;