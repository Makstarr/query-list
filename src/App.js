import queryString from "query-string";

import "./App.css";
import { AddTagForm } from "./components/add-tag-form";
import { TagsList } from "./components/tags-list";
import { useState } from "react";

function App() {
  const { tags } = queryString.parse(window.location.search);
  const [tagsList, setTagsList] = useState(tags && tags.split(","));

  return (
    <div className="App">
      <AddTagForm setTagsList={setTagsList} tagsList={tagsList} />
      {tagsList && <TagsList tagsList={tagsList} setTagsList={setTagsList} />}
    </div>
  );
}

export default App;
