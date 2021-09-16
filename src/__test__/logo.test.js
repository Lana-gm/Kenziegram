import { render, screen } from "@testing-library/react";
import Logo from "../components/Logo/index";

test("Should render the logo Kenziegram", () => {
  render(<Logo />);

  const logo = screen.getByText("Kenziegram");
  expect(logo).toBeInTheDocument();
});
