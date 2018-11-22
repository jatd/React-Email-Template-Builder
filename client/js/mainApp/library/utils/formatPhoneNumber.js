export const formatPhoneNumber = str => {
  if (!str || str[0] !== "+") {
    return str;
  }
  const newStr = str.slice(2, str.length);
  const insertStr = " ";
  return [
    "(" + newStr.slice(0, 3) + ")",
    insertStr,
    newStr.slice(3, 6),
    "-",
    newStr.slice(6)
  ].join("");
};
