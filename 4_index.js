const { odd, even } = require('./2_var');
const checkNumber = require('./3_func'); //하나만 보냈기 때문에 변수 바꿔도 됨

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));