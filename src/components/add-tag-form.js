import { useCallback, useContext, useState } from "react";
import queryString from "query-string";

import { TagsListContext } from "../context/tags-list-context";

import { setTagsQuery } from "../helpers/set-tags-query";
import { tagInputValidator } from "../helpers/tag-input-validator";

export const AddTagForm = () => {
  const { tagsList, setTagsList } = useContext(TagsListContext);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAddTag = useCallback(() => {
    if (!input) {
      return;
    }

    setTagsQuery([...tagsList, input]);

    const { tags: updatedTags } = queryString.parse(window.location.search);
    setTagsList(updatedTags.split(",") || []);
    setInput("");
  }, [input, setTagsList, tagsList]);

  const handleInput = useCallback((e) => {
    setInput(e.target.value);
    setError("");
    if (tagInputValidator(e.target.value)) {
      setError("Please use only letters and numbers!");
    }
  }, []);

  return (
    <>
      <input type="text" onChange={handleInput} value={input} onEnter={handleInput} />
      <button onClick={handleAddTag} disabled={error}>
        Add
      </button>
      {error}
    </>
  );
};
