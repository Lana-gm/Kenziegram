import SearchGallery from "../components/SearchGallery";
import { render, screen } from "@testing-library/react";

test("render the button on the component", () => {
  render(<SearchGallery />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
