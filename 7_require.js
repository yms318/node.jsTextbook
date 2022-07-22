require('./2_var'); //변수 사용 않고 실행만 할 때 
/* 
    1) require에 의해 실행된 모듈은 require.cache에 넣어 나중에 캐싱에 쓰임
    2) require.main은 노드 실행 시 첫 모듈을 가리킴
*/
console.log(require.main);

require.cache['C:\\myNodeJs\\var.js'].exports.odd // 다른 모듈의 변수를 exports하기