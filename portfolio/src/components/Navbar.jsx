import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../styles/Navbar.css';
import cvPdf from '../assets/I A S M Perera_CV.pdf';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const SiteNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleResumeClick = () => {
    window.open(cvPdf, '_blank');
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="site-navbar" expanded={expanded} onToggle={setExpanded}>
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="brand" onClick={handleNavClick}>
          <span className="brand-text">SENUKI</span>
          <span className="brand-dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          {expanded ? (
            <IoClose className="toggle-icon close-icon" />
          ) : (
            <HiMenuAlt3 className="toggle-icon menu-icon" />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link href="#about" onClick={handleNavClick}>About Me</Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick}>My Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>Contact Me</Nav.Link>
          </Nav>
          <div className="resume-wrap">
            <Button variant="dark" className="resume-btn" onClick={handleResumeClick}>
              Resume
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
