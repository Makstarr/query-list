import { useCallback, useState } from "react";
import queryString from "query-string";
import { setTagsQuery } from "../helpers/set-tags-query";

export const AddTagForm = ({ setTagsList, tagsList }) => {
  const [input, setInput] = useState("");

  const handleChangeParams = useCallback(() => {
    if (!input) {
      return;
    }

    setTagsQuery({ tagsList, newTag: input });

    const { tags: updatedTags } = queryString.parse(window.location.search);

    setTagsList(updatedTags.split(","));

    setInput("");
  }, [input, setTagsList, tagsList]);

  const handleInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  return (
    <>
      <input type="text" onChange={handleInput} value={input} onEnter={handleInput} />
      <button onClick={handleChangeParams} />
    </>
  );
};
