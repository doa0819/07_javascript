/* 전역과 지역 스코프 */
/* 
    전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다.
    전역에 변수를 선언하면, 전역 스코프를 갖는 전역 변수가 되며
    전역 변수는 어디서든지 참조할 수 있다.

    지역이란 함수 몸체 내부를 말하며, 지역은 지역 스코프를 만든다.
    지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며
    자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

*/

var x = 'global x';
var y = 'global y';

function outer(){

    var z = "outer's local z";
    console.log(x); 
    console.log(y); 
    console.log(z); 

    function inner(){
        var x = "inner's local x";
        console.log(x);     // x = 지역(inner'slocl x)
        console.log(y);     // 
        console.log(z);     // z 는 지금 지역 안에 없으니 한단계 위에서 발생
    }
    inner();

    // 지역변수 -> 해당 본문 안에서만 출력 가능
}

outer();

console.log(x);
console.log(z);

