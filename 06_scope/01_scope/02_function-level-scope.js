/* 함수 레벨 스코프 */

/* 
    C, 자바 등 대부분의 프로그래밍 언어는 함수 몸체만이 아니라
    모든 코드 블록(if,for,while, try/catch 등) 이 지역 스코프를
    만드는 블록 레벨 스코프를 가진다.
    하지만 var 키워드로 선언 된 변수는 오로지 함수의 코드(함수 몸체)만을
    지역 스코프로 인정하는 함수 레벨 스코프를 가진다.
    ES6 에서 도입 된 let, const 라는 키워드는 블록 레벨 스코프를 지원한다.
*/

// 함수 밖에서 var 키워드로 선언 된 변수는 전역 변수
var i = 0;

// for 코드 블록 내부에서 i 라는 변수를 선언
// i 이는 전역 변수로 이미 선언 된 전역 변수 i 가 있어 중복 선언 된다.
for(var i = 0; i < 10; i++){}

// 의도와 달리 for 코드 블록 내부에서의 값 변화가 반영된다.   // 전역 변수로 출력이 된다 -> 변화 감지
console.log(i); 