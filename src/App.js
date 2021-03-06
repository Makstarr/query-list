import { Box } from "@mui/material";

import { AddTagForm } from "./components/add-tag-form";
import { TagsList } from "./components/tags-list";
import { TagsListContextProvider } from "./context/tags-list-context";

function App() {
  return (
    <TagsListContextProvider>
      <Box sx={{ flexGrow: 1, maxWidth: "360px", margin: "auto" }}>
        <AddTagForm />
      </Box>
      <Box sx={{ flexGrow: 1, maxWidth: "900px", margin: "auto", display: "flex" }}>
        <TagsList />
        <TagsList />
        <TagsList />
      </Box>
    </TagsListContextProvider>
  );
}

export default App;
