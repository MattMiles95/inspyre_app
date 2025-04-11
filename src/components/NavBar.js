// React
import React from "react";
import { NavLink } from "react-router-dom";

// API
import axios from "axios";

// Assets
import logo from "../assets/inspyre_logo.png";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Context
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";

// CSS
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Buttons.module.css";

// Hooks
import UseClickOutsideToggle from "../hooks/UseClickOutsideToggle";

// Utils
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = UseClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const loggedInNavbar = (
    <>
      {/* ADD POST */}
      <NavLink
        className={({ isActive }) =>
          `${styles.NavLink} mr-4 ${styles.InspyreLink} ${
            isActive ? styles.ActiveBtn : ""
          }`
        }
        to="/inspyre"
      >
        Inspyre +
      </NavLink>

      <Dropdown>
        <Dropdown.Toggle
          variant="link"
          className={`${styles.NavLinkAvatar} ${styles["dropdown-toggle"]}`}
        >
          {/* <Avatar src={currentUser.avatarUrl || ''} height={45} /> */}
          <Image
            src={currentUser?.profile_image}
            roundedCircle
            height={40}
            width={40}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" className="p-0">
          <Dropdown.Item className={`${styles.DropdownItem} py-2 px-0 m-0`}>
            <NavLink
              className={({ isActive }) =>
                `${styles.MenuNavLink} ${isActive ? styles.ActiveMenu : ""}`
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item className={`${styles.DropdownDivider} ${styles.DropdownItem} py-2 px-0 m-0`}>
            <NavLink
              className={({ isActive }) =>
                `${styles.MenuNavLink} ${isActive ? styles.ActiveMenu : ""}`
              }
              to="/sparks"
            >
              Sparks
            </NavLink>
          </Dropdown.Item>

          <Dropdown.Item className={`${styles.DropdownDivider} ${styles.MenuNavLink} ${styles.DropdownItem} py-3 pl-2 m-0`} onClick={handleSignOut}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

  const loggedOutNavbar = (
    <>
      {/* SIGN IN */}
      <NavLink
        className={({ isActive }) =>
          `${styles.NavLink} mr-4 ${isActive ? styles.Active : ""}`
        }
        to="/signin"
      >
        Login
      </NavLink>

      {/* SIGN UP */}
      <NavLink
        exact
        className={({ isActive }) =>
          `${styles.NavLink} mr-4 ${isActive ? styles.Active : ""}`
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
                `${styles.Discover} mr-4 ${isActive ? styles.Active : ""}`
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
