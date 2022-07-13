import { useState } from "react";

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

export const TagsListItem = ({ title, index, handleDeleteTag }) => {
  const [hover, setHover] = useState(false);
  return (
    <ListItem key={index} component="div" disablePadding data-testid="tags-list-item">
      <ListItemButton
        sx={{ borderRadius: "10px" }}
        onClick={() => handleDeleteTag(index)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        data-testid="tags-list-item-button"
      >
        <ListItemIcon>{hover ? <ClearOutlinedIcon /> : <LocalOfferOutlinedIcon />}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
