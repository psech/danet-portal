import React from "react";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const UserMenu = (props) => {
  const logout = () => props.logout({ returnTo: window.location.origin });

  const navDropdownTitle = <FontAwesomeIcon icon={faUser} />;

  return (
    <NavDropdown title={navDropdownTitle} id="nav-dropdown">
      <LinkContainer to="/profile">
        <NavDropdown.Item>
          <FontAwesomeIcon icon={faIdBadge} className="mr-2" />
          Profile
        </NavDropdown.Item>
      </LinkContainer>

      <NavDropdown.Divider />

      <NavDropdown.Item onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default withAuthenticationRequired(UserMenu);
