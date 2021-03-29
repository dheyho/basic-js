const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, option) {


      let countStr = str.length;
      newStr = str.repeat(option.repeatTimes).match(new RegExp('.{1,' + countStr + '}', 'g'));

      if (!option.separator){
        newStr = newStr.join('+');
      }
      else if(!option.addition){
        newStr = newStr.join(option.separator);
      }
      else if (!option.additionSeparator){
        newStr = newStr.join(option.addition + option.separator) + option.addition;
      }
      
    return newStr;
    
};
  