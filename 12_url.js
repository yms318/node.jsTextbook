const url = require('url');

const { URL } = url;

// WHATWG url : username, password, origin, searchParams 속성이 있음
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

console.log('------------------------------');

// 주소를 분해함. username, password 대신 auth 속성이 있고 searchParams 대신 query가 있음
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));