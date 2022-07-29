// 단방향 암호화 : 해시
// createHash : 해시 알고리즘
// md5, sha1, sha256, sha512 등이 가능하나 md5, sha1은 취약점이 발견됨

// digest : 인코딩 알고리즘
// base64가 문자열이 가장 짧아 애용됨

const crypto = require('crypto');

console.log('base64 : ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex : ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64 : ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));