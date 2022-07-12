import { useContext } from "react";

import { TagsListContext } from "../context/tags-list-context";

import { setTagsQuery } from "../helpers/set-tags-query";

export const TagItem = ({ title, index }) => {
  const { tagsList, setTagsList } = useContext(TagsListContext);

  const handleDeleteTag = (index) => {
    const updatedTags = [...tagsList];
    updatedTags.splice(index, 1);
    setTagsQuery({ tagsList: updatedTags });
    setTagsList(updatedTags);
  };

  return (
    <li style={{ color: `${title}` }}>
      {title}
      <button onClick={() => handleDeleteTag(index)}>Delete</button>
    </li>
  );
};
