import { fireEvent, render, screen } from "@testing-library/react";
import { TagsListItem } from "../tags-list-item";

const handleDeleteTag = jest.fn();
const props = { title: "Tag", index: 0, handleDeleteTag };

test("TagsListItem renders", () => {
  render(<TagsListItem {...props} />);
  expect(screen.getByTestId("tags-list-item")).toBeInTheDocument();
  expect(screen.getByText("Tag")).toBeInTheDocument();
});

test("TagsListItem fires handleDeleteTag", () => {
  render(<TagsListItem {...props} />);
	const itemButton = screen.getByTestId("tags-list-item-button")
	fireEvent.click(itemButton);

  expect(handleDeleteTag).toBeCalledWith(props.index)
});
