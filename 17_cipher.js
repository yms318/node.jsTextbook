// 프론트에서 key를 가지고 있으면 노출되므로 대칭형 암호화 사용 안함
// crypto-js을 사용하는 것이 더 쉬움 : 대칭형은(같은키) AES, 비대칭(다른키)은 RSA방식 추천

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';                // crypto.getCiphers() : 사용가능한 알고리즘 목록 볼 수 있음
const key = 'abcdefghijklmnopqrstuvwxyz123456'; // 키는 32바이트 고정
const iv = '1234567890123456';                  // 초기화 벡터(해킹 방지) 16바이트 고정



const cipher = crypto.createCipheriv(algorithm, key, iv);
// 문자열, 인코딩, 출력 인코딩 : 문자열은 보통 utf8, 암호는 base64
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
// 출력 인코딩을 넣어야 암호와 완료
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);