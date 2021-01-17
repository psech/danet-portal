import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders logo", () => {
  render(<App />);
  const navbar = screen.getByTestId("navigation-bar");
  expect(navbar).toBeInTheDocument();
});
