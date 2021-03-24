const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(arr) {

  if (!Array.isArray(arr)){
    return false;
  }
  let newArr = [];

  for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) == 'string'){
      newArr[i] = arr[i].replace(/\s+/gmi, "").toLowerCase().split('').slice(0, 1);
    }
  }
  return newArr.sort().join('').toUpperCase();

}