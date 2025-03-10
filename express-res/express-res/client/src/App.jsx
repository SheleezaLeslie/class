// src/App.jsx
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css'; 

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Resume Yippee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#overview">Overview</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* main Content */}
      <Container className="main-container">
        {/* left column */}
        <div className="left-column" id="home">
          <div className="name">JTT</div>
          <div className="job-title">Software Developer</div>
          <div className="contact-info">Email: jtt@email.ca</div>
          <div className="contact-info">Phone: (123) 456-7890</div>
        </div>
        {/* right column */}
        <div className="right-column">
          <section id="overview">
            <Overview />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </div>
      </Container>
    </>
  );
};

export default App;
