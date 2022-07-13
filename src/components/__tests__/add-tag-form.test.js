import { render, screen } from "@testing-library/react";
import { AddTagForm } from "../add-tag-form";

test("AddTagForm renders", () => {
  render(<AddTagForm />);
  expect(screen.getByTestId("add-tag-input")).toBeInTheDocument();
  expect(screen.getByTestId("add-tag-button")).toBeInTheDocument();
});
