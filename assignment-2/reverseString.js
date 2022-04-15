// ES5

// const reverseString = (string) => {
//   let reverse = "";
//   console.log(reverse);
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i];
//   }
//   return reverse;
// };

//ES6

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export default reverseString;
