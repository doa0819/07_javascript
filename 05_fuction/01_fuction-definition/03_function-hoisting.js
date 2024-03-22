/* 함수 호이스팅 */

// 함수 참조
console.log(hello);
console.log(hi);

// 함수 호출
console.log(hello('이도아'));
console.log(hi('이도아'));

// 함수 선언문  -> 함수 선언시 반드시 변수명 지어줘야 한다.
function hello(name){
    return `${name} 님 하이요~~~`;
}

// 함수 표현식
var hi = function(name){
    return `${name} 님 방가요~~`;
}

/* 
    함수 선언문은 런타임(즉, 동작시) 이전 자바스크립트 엔진에 의해 먼저 실행된다.
    따라서 함수 선언문 이전에 함수를 참조할 수 있으며, 호출을 할 수도 있다.
    -> 마치 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는
        자바스크립트 고유의 특징을 함수 호이스팅 이라고 한다.
*/

