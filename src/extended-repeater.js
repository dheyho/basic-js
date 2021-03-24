const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, option) {


      let countStr = str.length;
      
      if (!option.separator){
        newStr = str.repeat(option.repeatTimes).match(new RegExp('.{1,' + countStr + '}', 'g'));
        newStr = newStr.join('+');
      }

      else if (!option.addition){
        newStr = str.repeat(option.repeatTimes).match(new RegExp('.{1,' + countStr + '}', 'g'));
        newStr = newStr.join(option.separator);
      }
      else if (!option.additionSeparator){
        newStr = str.repeat(option.repeatTimes).match(new RegExp('.{1,' + countStr + '}', 'g'));
        newStr = newStr.join(option.addition.repeat(option.additionRepeatTimes) + option.separator) + option.addition;
      }
      else if(!option.repeatTimes && !option.additionRepeatTimes){
        newStr = str.match(new RegExp('.{1,' + countStr + '}', 'g'));
        newStr = newStr.join(option.addition + option.separator+option.additionSeparator) + option.addition;
      }
      else if (!option.separator || !option.additionSeparator){
        newStr = str.repeat(option.repeatTimes).match(new RegExp('.{1,' + countStr + '}', 'g'));
        newStr = newStr.join(option.addition.repeat(option.additionRepeatTimes)) + option.addition;
      }
      
        newStr = str.repeat(option.repeatTimes).match(new RegExp('.{1,' + countStr + '}', 'g'));
        newStr = newStr.join(option.addition.repeat(option.additionRepeatTimes) + option.separator + option.additionSeparator) + option.addition;
      
    
     
    return newStr;
    
};
  