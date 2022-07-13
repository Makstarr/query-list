import { useCallback, useContext, useState } from "react";
import queryString from "query-string";

import { Grid, TextField } from "@mui/material";

import { TagsListContext } from "../../context/tags-list-context";
import { setTagsQuery } from "../../helpers/set-tags-query";
import { tagInputValidator } from "../../helpers/tag-input-validator";

import { StyledButton } from "./button.styled";


export const AddTagForm = () => {
  const { tagsList, setTagsList } = useContext(TagsListContext);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAddTag = useCallback(() => {
    if (!input) {
      return;
    }
    if (tagInputValidator(input)) {
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
    <Grid container spacing={1}>
      <Grid item xs={9}>
        <TextField
          fullWidth
          onChange={handleInput}
          value={input}
          label="New tag"
          helperText={error || ""}
          error={!!error}
          onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
          data-testid="add-tag-input"
        />
      </Grid>
      <Grid item xs={3}>
        <StyledButton
          onClick={handleAddTag}
          disabled={tagInputValidator(input)}
          data-testid="add-tag-button"
        >
          Add
        </StyledButton>
      </Grid>
    </Grid>
  );
};
