const path = require('path'); // 경로 처리 시 구분자 처리해줌

//path.join(__dirname, 'var.js'); // 디렉토리명과 파일명을 합쳐서 경로 만들어쥼
path.join(__dirname, '..', 'var.js');

console.log(path.join(__dirname, 'var.js'));
console.log(path.resolve(__dirname, '/var.js')); // 절대경로를 처리

