import "./App.css";
import { AddTagForm } from "./components/add-tag-form";
import { TagsList } from "./components/tags-list";
import { TagsListContextProvider } from "./context/tags-list-context";

function App() {
  return (
    <div className="App">
      <TagsListContextProvider>
        <AddTagForm />
        <TagsList />
      </TagsListContextProvider>
    </div>
  );
}

export default App;
