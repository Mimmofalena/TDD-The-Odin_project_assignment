const caesarCipher = (string, shift) => {
  const cypheredString = string
    .toLowerCase()
    .split("")
    .map((el) => {
      return el.charCodeAt(0) + shift;
    });

  return cypheredString.map((el) => String.fromCharCode(el)).join("");
};

export default caesarCipher;
