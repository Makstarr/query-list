export const tagInputValidator = (value) => {
  const re = /^[\d\w]+$/;
  if (value && !re.test(value)) {
    return false;
  }
  return true;
};
