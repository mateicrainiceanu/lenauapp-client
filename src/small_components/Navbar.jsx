import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import proxy from './Proxy';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navx(props){

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch(proxy + "/api/news/categories").then(response => response.json()).then(data => {
      setCategories(data.categories);
    })
  }, [])

  return (
    <section id="navigation-bar">
      <Navbar className="navbar navbar-expand-lg" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand ju" href="/">
            <img alt="logo" src="images/logo-lenau.png" className="d-inline-block align-text-top logo" />
          </Navbar.Brand>

          <Nav.Link as={Link} to="/user" className="nav-link" aria-current="page">
            {props.user && <p>{props.user.username}</p>}
          </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav className=" navbar-nav ms-auto mb-2 mb-lg-0">
              <Nav.Item className="nav-item">
                <Nav.Link eventKey={1} as={Link} to="/" className="nav-link" aria-current="page">
                  Acasa
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Link eventKey={2} to="/news:general" className="nav-link">
                  Noutati
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey={3} as={Link} to="/prezentare-generala" className="nav-link" aria-current="page">
                  Despre noi
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey={4} as={Link} to="/contact" className="nav-link" aria-current="page">
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link eventKey={5} href="https://www.facebook.com/NikolausLenau" className="nav-link">
                  <i className="fa-brands fa-facebook-f"></i>
                </Nav.Link>
              </Nav.Item>

              <NavDropdown title="Mai multe" id="navbarDropdown">
                <NavDropdown.Item as={Link} to="/conducerea">
                  Management
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/legislatie">
                  Legislație
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="De interes" id="navbarDropdown">
                {categories.map((category, i) => (
                  <NavDropdown.Item key={i} as={Link} to={"/redirect:" + category}>
                    {category}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}


export default Navx;