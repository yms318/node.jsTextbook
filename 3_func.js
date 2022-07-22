// const value = require('./var');
// console.log(value);

const { odd, even } = require('./2_var');
// import { odd, even } from './var : 최신 문법인 JS 자체 모듈로 바꿀 수 있으나 1:1 대응은 아님

console.time('MS');
function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

console.timeEnd('MS');

module.exports = checkOddOrEven;