// searchParams : WHATWG방식

const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); // 복수의 값을 가져올 때
console.log('searchParams.get():', myURL.searchParams.get('limit'));          // 첫번째 값
console.log('searchParams.has():', myURL.searchParams.has('page'));

console.log('searchParams.keys():', myURL.searchParams.keys());               // iterator로 모든 키 가져옴
console.log('searchParams.values():', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');         // append : 키와 값 추가
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');            // filter : 같은 키 값을 모두 지우고 추가
console.log(myURL.searchParams.getAll('filter'));

//myURL.searchParams.delete('filter');                // delete : 키 제거
//console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());     // 조작한 객체를 다시 문자열로 변환
myURL.search = myURL.searchParams.toString();                               // 주소 객체에 반영