import { useContext } from "react";

import { TagsListContext } from "../context/tags-list-context";

import { TagItem } from "./tag-item";

export const TagsList = () => {
  const { tagsList } = useContext(TagsListContext);

  if (!tagsList.length) {
    return null;
  }

  return (
    <ul>
      {tagsList.map((tag, index) => (
        <TagItem title={tag} index={index} key={tag + index} />
      ))}
    </ul>
  );
};
