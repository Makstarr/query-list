import { createContext, useState } from "react";
import queryString from "query-string";

export const TagsListContext = createContext({ tagsList: []});

export const TagsListContextProvider = ({ children }) => {
  const { tags } = queryString.parse(window.location.search);
  const [tagsList, setTagsList] = useState(tags ? tags.split(",") : []);

  return (
    <TagsListContext.Provider
      value={{
        tagsList,
        setTagsList,
      }}
    >
      {children}
    </TagsListContext.Provider>
  );
};
