import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/add-tag-form", () => ({
  AddTagForm: () => <div>AddTagForm</div>,
}));

test("App renders", () => {
  render(<App />);
  expect(screen.getByText("AddTagForm")).toBeInTheDocument();
});
