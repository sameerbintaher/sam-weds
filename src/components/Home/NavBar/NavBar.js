import React, { useContext, useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Logo from "../../../images/logo.png";
import ProfilePopper from "../ProfilePopper/ProfilePopper";

const NavBar = () => {
  const {
    loggedInUser: { isSignedIn },
  } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className={
        isSticky || isCollapsed ? "shadow-sm bg-white py-2 " : "py-4 bg-light "
      }
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="ml-md-5 text-dark"
        style={{ fontSize: "30px" }}
      >
        <img
          alt="Logo"
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{" "}
        <strong>Sam Weds</strong>
      </Navbar.Brand>
      {isSignedIn ? (
        <div style={{ marginRight: "5.5rem" }}>
          <ProfilePopper />
        </div>
      ) : (
        <Button
          as={Link}
          to="/login"
          className="mr-md-5 px-4 btn btn-primary text-white"
          active
        >
          Login
        </Button>
      )}{" "}
      <Navbar.Toggle
        onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="mr-md-5 text-dark"
            onClick={() => window.scrollTo(500, 0)}
            active
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/explore"
            className="mr-md-5 text-dark"
            active
          >
            Service
          </Nav.Link>
          <Nav.Link href="" className="mr-md-5 text-dark" active>
            About
          </Nav.Link>
          <Nav.Link href="" className="mr-md-5 text-dark" active>
            Gallery
          </Nav.Link>
          <Nav.Link href="#contact" className="mr-md-5 text-dark" active>
            Contact Us
          </Nav.Link>

          {isSignedIn && (
            <Nav.Link
              as={Link}
              to="/dashboard/profile"
              className="mr-md-5 text-dark"
              active
            >
              Dashboard
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
