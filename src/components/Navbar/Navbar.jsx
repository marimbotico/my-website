import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css";

function CustomNavbar({ scrollToSection, homeRef, portfolioRef, aboutRef, contactRef }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand onClick={() => scrollToSection(homeRef)} className="logo" style={{ cursor: 'pointer' }}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection(portfolioRef)} style={{ cursor: 'pointer' }}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(aboutRef)} style={{ cursor: 'pointer' }}>About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;