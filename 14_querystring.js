// querystring : Node 방식

const url = require('url');
const querystring = require('querystring');

const parsedUrl
     = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript'); // url의 query 부분을 자바스크립트 객체로 분해
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse() : ', query);
console.log('querystring.stringify() : ', querystring.stringify(query));                          // 분해된 query 객체를 문자열로 조립