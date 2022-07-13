import { render, screen } from "@testing-library/react";
import { TagsList } from "../tags-list";

test("TagsList renders", () => {
  render(<TagsList />);
  expect(screen.getByTestId("tags-list")).toBeInTheDocument();
});
