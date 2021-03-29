const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let newArr = [];

  let trash;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next") {
      if (newArr[i + 2] === "--double-prev" || newArr[i + 2] === "--discard-prev") {
        trash = newArr.splice(i + 2, 1)
      }
      if (i === newArr.length - 1) {
        trash = newArr.splice(i, 1)
      } else {
        trash = newArr.splice(i, 2)
        i = 0;
      }
    }
    if (newArr[i] === "--discard-prev") {
      if (i === 0) {
        trash = newArr.splice(i, 1)
        i = 0;
      } else {
        trash = newArr.splice(i - 1, 2)
        i = 0;
      }
    }
    if (newArr[i] === "--double-next") {
      if (i === newArr.length - 1) {
        trash = newArr.splice(i, 1)
      } else {
        newArr[i] = newArr[i + 1];
      }
    }
    if (newArr[i] === "--double-prev") {
      if (i === 0) {
        trash = newArr.splice(i, 1)
        i = 0;
      } else {
        newArr[i] = newArr[i - 1];
      }
    }
  }
  return newArr;
};
