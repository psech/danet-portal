import { render, screen } from "@testing-library/react";
import App from "../App";
import { Router } from "react-router-dom";
import history from "../utils/history";

it("renders logo", () => {
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const navbar = screen.getByTestId("navigation-bar");
  expect(navbar).toBeInTheDocument();
});
