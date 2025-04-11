// React
import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import logo from "../assets/inspyre_logo.png";

// Bootstrap Components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Context
import {
  useCurrentUser,
} from "../contexts/CurrentUserContext";

// CSS
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Buttons.module.css";

// Hooks
import UseClickOutsideToggle from "../hooks/UseClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();

  const { expanded, setExpanded, ref } = UseClickOutsideToggle();

  const loggedInNavbar = (
    <>
      {/* ADD POST */}
      <NavLink className={styles.NavLink} to="/inspyre">
        <Button className={btnStyles.Btn}>Inspyre +</Button>
      </NavLink>
    </>
  );

  const loggedOutNavbar = (
    <>
      {/* SIGN IN */}
      <NavLink
        className={({ isActive }) =>
          `${styles.NavLink} ${isActive ? styles.Active : ""}`
        }
        to="/signin"
      >
        Login
      </NavLink>

      {/* SIGN UP */}
      <NavLink
        exact
        className={({ isActive }) =>
          `${styles.NavLink} ${isActive ? styles.Active : ""}`
        }
        to="/signup"
      >
        Join
      </NavLink>
    </>
  );

  return (
    <Navbar
      className={styles.NavBar}
      expanded={expanded}
      expand="md"
      fixed="top"
      bg="dark"
      variant="dark"
    >
      <Container>
        {/* Logo */}
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="75" />
          </Navbar.Brand>
        </NavLink>

        {/* Navbar Toggle */}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="pt-3">
          <Nav className="ml-auto text-left">
            {/* Discover */}
            <NavLink
              className={({ isActive }) =>
                `${styles.Discover} ${isActive ? styles.Active : ""}`
              }
              to="/"
            >
              Discover
            </NavLink>
            <span className={`${styles.Divider} pr-3`}>|</span>
            {currentUser ? loggedInNavbar : loggedOutNavbar}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
