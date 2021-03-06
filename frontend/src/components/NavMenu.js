import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import "./NavMenu.css";

export class NavMenu extends Component {
  render () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="/"><img
        alt=""
        src="/img/header_logo.svg"
        width="200"
        height="60"
        className="d-inline-block align-top"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/rules">Goldene Regeln</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
