import { useContext } from "react";

import { Box } from "@mui/material";

import { AddTagForm } from "./components/add-tag-form";
import { TagsList } from "./components/tags-list";
import { TagsListContext } from "./context/tags-list-context";

function App() {
  const { tagsList } = useContext(TagsListContext);
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "360px", margin: "auto" }}>
      <AddTagForm />
      {tagsList.length ? <TagsList /> : null}
    </Box>
  );
}

export default App;
