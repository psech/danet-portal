import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders logo", () => {
  render(<App />);
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});
