const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) != '[object Date]') {
    {
      throw 'Error';
    }
  }

  let monthNumber = date.getMonth();

  if (monthNumber === 11 || monthNumber === 0 || monthNumber === 1) {
    return 'winter'
  } else if (monthNumber === 2 || monthNumber === 3 || monthNumber === 4) {
    return 'spring'
  } else if (monthNumber === 5 || monthNumber === 6 || monthNumber === 7) {
    return 'summer'
  } else {
    return 'autumn'
  } 

};
