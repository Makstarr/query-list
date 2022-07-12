export const TagItem = ({ title, index, handleDeleteTag }) => {
  return (
    <li style={{ color: `${title}` }}>
      {title}
      <button onClick={() => handleDeleteTag(index)}>Delete</button>
    </li>
  );
};
