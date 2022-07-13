import { Box, List } from "@mui/material";

import { TagsListItem } from "./tags-list-item";
import { setTagsQuery } from "../helpers/set-tags-query";
import { useContext } from "react";
import { TagsListContext } from "../context/tags-list-context";

export const TagsList = () => {
  const { tagsList, setTagsList } = useContext(TagsListContext);

  const handleDeleteTag = (index) => {
    const updatedTags = [...tagsList];
    updatedTags.splice(index, 1);
    setTagsQuery(updatedTags);
    setTagsList(updatedTags);
  };

  if (!tagsList.length) {
    return null;
  }
	
  return (
    <Box sx={{ width: "100%", paddingTop: "30px" }}>
      <List sx={{ width: "100%", maxWidth: 360 }} data-testid="tags-list">
        {tagsList.map((tag, index) => (
          <TagsListItem
            title={tag}
            index={index}
            key={tag + index}
            handleDeleteTag={handleDeleteTag}
          />
        ))}
      </List>
    </Box>
  );
};
