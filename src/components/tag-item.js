export const TagItem = ({ title, index, handleDeleteTag }) => {
  return (
    <li style={{ color: `${title}` }}>
      {index} 
      {title}
      <button onClick={() => handleDeleteTag(index)}>delete</button>
    </li>
  );
};
