const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = (0.693 / HALF_LIFE_PERIOD);

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || isNaN(+sampleActivity) || typeof(sampleActivity) != 'string'){
    return false;
  }
  if (+sampleActivity <= 0 || +sampleActivity > 15){
    return false;
  }
  age = Math.ceil((Math.log(MODERN_ACTIVITY/(+sampleActivity)))/k);
  
  return age;
}
