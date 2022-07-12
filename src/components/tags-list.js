import { TagItem } from "./tag-item";
import { setTagsQuery } from "../helpers/set-tags-query";

export const TagsList = ({ tagsList, setTagsList }) => {
  const handleDeleteTag = (index) => {
    const updatedTags = [...tagsList]
		updatedTags.splice(index, 1);
    setTagsQuery({ tagsList: updatedTags });
    setTagsList(updatedTags);
  };

  return (
    <ul>
      {tagsList.map((tag, index) => (
        <TagItem title={tag} index={index} key={tag + index} handleDeleteTag={handleDeleteTag} />
      ))}
    </ul>
  );
};
