// React
import React from "react";

// Assets
import logo from "../assets/inspyre_logo.png";

// Bootstrap Components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// CSS
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
  return (
    <Navbar
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand>
          <img src={logo} alt="logo" height="80" />
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        {/* Navbar Links */}
          <Nav className="ml-auto text-left">
            <Nav.Link className={styles.NavLink}>
              <Button className={styles.DiscoverBtn}>Discover</Button>
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              Sign in
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;