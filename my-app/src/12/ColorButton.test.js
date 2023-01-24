import { render, screen, logRoles, fireEvent } from "@testing-library/react";

import ColorButton from "./ColorButton";

test("button has correct initial color", () => {
  const { container } = render(<ColorButton />);
  logRoles(container);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
// test("button has correct initial text", () => {});
test("button turns blue when clicked", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe("Change to red");
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
