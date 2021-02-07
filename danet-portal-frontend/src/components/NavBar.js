import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faPlusCircle,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

import UserMenu from "./UserMenu";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar
      data-test-id="navigation-bar"
      collapseOnSelect
      sticky="top"
      bg="light"
      expand="md"
      className="mb-3"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <Image src={logo} height="50" alt="Danet Portal logo" />
        </Navbar.Brand>
      </LinkContainer>
      <Nav activeKey={window.location.pathname}>
        <LinkContainer to="/subscription-new">
          <Nav.Link>
            <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
            New Subscription
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/subscription-update">
          <Nav.Link>
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Update Subscription
          </Nav.Link>
        </LinkContainer>
      </Nav>
      <Navbar.Toggle aria-controls="danet-navbar" />
      <Navbar.Collapse className="justify-content-end" id="danet-navbar">
        <Nav activeKey={window.location.pathname}>
          {!isAuthenticated ? (
            <Nav.Link onClick={() => loginWithRedirect()}>
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Login
            </Nav.Link>
          ) : (
            <UserMenu logout={logout} />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
