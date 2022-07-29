const path = require('path'); // 경로 처리 시 구분자('/', '\', '\\') 처리해줌, 운영체제별로 분기 처리 필요 없어짐

const string = __filename; // 11_path.js

console.log('path.sep : ', path.sep);             // 현재 운영체제 파일경로 구분자
console.log('path.delimiter : ', path.delimiter); // 현재 운영체제의 환경변수 구분자 (windows는 세미콜론, fosix는 쉼표)

console.log('---------------------------------------------');

console.log('path.dirname() : ', path.dirname(string));                                 // 경로명
console.log('path.extname() : ', path.extname(string));                                 // 확장자
console.log('path.basename() : ', path.basename(string));                               // 파일명
console.log('path.basename - extname : ', path.basename(string, path.extname(string))); // 파일명 - 확장자

console.log('---------------------------------------------');

// 분해
console.log('path.parse', path.parse(string));
// 합치기
console.log('path.format() : ', path.format({
    dir : 'C:\\MyNodeJs',
    name : 'path',
    ext : '.js'
}));
// 구분자 섞어서 썼을 때 고쳐줌
console.log('path.normalize() : ', path.normalize('C://MyNodeJs\\\11_path.js'));

console.log('---------------------------------------------');

// 절대경로면 true, 상대경로면 false
console.log('path.isAbsolute(C:\\) : ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home) : ', path.isAbsolute('./home'));

console.log('---------------------------------------------');

// 첫번째 인자에서 두번째 인자로 가려면 어떻게 해야하는지 알려줌
console.log('path.relative() : ', path.relative('C://MyNodeJs\\\11_path.js', 'C:\\'));
// 여러 인자를 넣으면 하나의 경로로 합쳐줌. 상대경로인 ..(부모 디렉토리)과 .(현 위치)도 알아서 처리
console.log('path.join() : ', path.join(__dirname, '..', '..', '/MyNodeJs', '.'));

console.log('---------------------------------------------');

console.log(path.join(__dirname, '..', '/2_var.js'));   // 절대경로를 무시 (/가 없다고 생각)
console.log(path.join(__dirname, '/2_var.js'));         // 절대경로를 무시 (/가 없다고 생각)
console.log(path.resolve(__dirname, '/2_var.js'));      // 절대경로를 처리
console.log(path.resolve(__dirname, '2_var.js'));       // 절대경로를 처리
