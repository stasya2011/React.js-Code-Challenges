import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import { replaceCamelWithSpaces } from "./ColorButton";
import ColorButton from "./ColorButton";

test("button has correct initial color", () => {
  const { container } = render(<ColorButton />);
  logRoles(container);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

// test("button has correct initial text", () => {});
test("button turns blue when clicked", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

test("initial conditions", () => {
  render(<ColorButton />);
  // check that the button starts out enable
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
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

test("disabled button has gray background and revert to MediumVioletRed", () => {
  render(<ColorButton />);
  const btn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  expect(btn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
});

test("clicked disabled button has gray background and revert to blue", () => {
  render(<ColorButton />);
  const btn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(btn).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(btn);

  expect(btn).toHaveStyle({ backgroundColor: "MidnightBlue" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

// Medium Violet Red
// Midnight Blue

describe("Space before canel-case capital letters:", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiply inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
