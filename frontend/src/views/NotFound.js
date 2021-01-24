import React from "react";
import "./NotFound.css";

import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

const NotFound = () => (
  <Container className="NotFound text-center">
    <h3>
      Sorry, page not found! <FontAwesomeIcon icon={faFrown} />
    </h3>
  </Container>
);
export default NotFound;
