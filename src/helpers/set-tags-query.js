export const setTagsQuery = ({ tagsList, newTag }) => {
  if (newTag || (tagsList && tagsList.length)) {
    window.history.pushState(
      null,
      null,
      `?tags=${tagsList ? [...tagsList, newTag].join(",") : newTag}`
    );
  } else {
    window.history.pushState(null, null, "?");
  }
};
