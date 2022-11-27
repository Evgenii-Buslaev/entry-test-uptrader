const validateData = (data) => {
  if (!data) {
    alert("Please, fill in the gaps");
    return false;
  }
  return true;
};

export default validateData;
