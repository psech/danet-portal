import React from "react";
import Routes from "./Routes";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Container>
      <NavBar />
      <Routes />
    </Container>
  );
}

export default App;
