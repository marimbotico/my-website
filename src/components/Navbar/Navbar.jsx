import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css";

function CustomNavbar({ scrollToSection, homeRef, portfolioRef, aboutRef }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsNavOpen(false); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4 shadow-sm" expanded={isNavOpen}>
      <Container>
        <Navbar.Brand onClick={() => handleNavClick(homeRef)} className="logo" style={{ cursor: 'pointer' }}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsNavOpen(!isNavOpen)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick(portfolioRef)} style={{ cursor: 'pointer' }}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(aboutRef)} style={{ cursor: 'pointer' }}>About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
