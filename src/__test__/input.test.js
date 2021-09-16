import GrayInput from "../components/GrayInput";
import { render, screen } from "@testing-library/react";

test("render the input", () => {
  render(<GrayInput />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});
