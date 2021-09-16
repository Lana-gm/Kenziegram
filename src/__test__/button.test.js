import BlueButton from "../components/BlueButton";
import { render, screen } from "@testing-library/react";

test("render the button", () => {
  render(<BlueButton />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
