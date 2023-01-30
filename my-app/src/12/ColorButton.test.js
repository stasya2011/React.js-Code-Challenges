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

test("initial conditions", () => {
  render(<ColorButton />);
  // check that the button starts out enable
  const colorBtn = screen.getByRole("button", {
    name: "Change to blue",
  });
  expect(colorBtn).toBeEnabled();
});

test("checkbox disabled button on first click and enable on second click", () => {
  render(<ColorButton />);
  const btn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(btn).toBeDisabled();
});

test("disabled button has gray background and revert to red", () => {
  render(<ColorButton />);
  const btn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  expect(btn).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
});

test("clicked disabled button has gray background and revert to blue", () => {
  render(<ColorButton />);
  const btn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(btn).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(btn);

  expect(btn).toHaveStyle({ backgroundColor: "blue" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "blue" });
});
