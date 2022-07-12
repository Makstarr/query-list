// Updates query params for given array

export const setTagsQuery = (tagsList) => {
  if (tagsList && tagsList.length) {
		console.log(tagsList.join(","));
    window.history.pushState(null, null, `?tags=${tagsList.join(',')}`);
  } else {
    window.history.pushState(null, null, "?");
  }
};
