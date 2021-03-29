const CustomError = require("../extensions/custom-error");

const n = 26;

class VigenereCipheringMachine {
  encrypt(str, key) {
    let mi = '';
    let ki = '';
    let strArr = str.split('');
    let result = [];
    let resStr = '';
    let j = 0;
    let keyArr = (key.repeat(Math.ceil(str.length / key.length)).match(new RegExp('.{1,' + key.length + '}', 'g'))).join('').split('');
    for (let i = 0; i < strArr.length; i++) {
      mi = strArr[i].toLowerCase().charCodeAt(0) - 96;
      ki = keyArr[i - j].toLowerCase().charCodeAt(0) - 96;
      if (!strArr[i].match(/[A-Z]/gi)) {
        result.push(strArr[i]);
        j++;
      } else if (mi + ki <= n) {
        result.push((mi + ki) - 1);
      } else {
        result.push((mi + ki - 1) % n);
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (!strArr[i].match(/[A-Z]/gi)) {
        resStr += result[i];
      } else {
        resStr += String.fromCharCode(result[i] + 96);
      }
    }
    return resStr.toUpperCase();
  }
  decrypt(str, key) {
    let n = 26;
    let ci = '';
    let ki = '';
    let strArr = str.toLowerCase().split('');
    let result = [];
    let resStr = '';
    let j = 0;
    let keyArr = (key.repeat(Math.ceil(str.length / key.length)).match(new RegExp('.{1,' + key.length + '}', 'g'))).join('').split('');
    for (let i = 0; i < strArr.length; i++) {
      ci = strArr[i].toLowerCase().charCodeAt(0) - 96;
      ki = keyArr[i - j].toLowerCase().charCodeAt(0) - 96;
      if (!strArr[i].match(/[A-Z]/gi)) {
        result.push(strArr[i]);
        j++;
      } else {
        result.push((ci + n - ki + 1) % n);
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (!strArr[i].match(/[A-Z]/gi)) {
        resStr += result[i];
      } else {
        resStr += String.fromCharCode(result[i] + 96);
      }
    }
    return resStr.toUpperCase();
  }
}
module.exports = VigenereCipheringMachine;
