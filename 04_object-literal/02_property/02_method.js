/* 자바스크립트에서 함수는 객체이다.
    함수는 값으로 취급할 수 있고, 프로퍼티 값으로 쓰일 수 있다.
 */

    var dog = {
        name : "윤재",
        eat : function(food){
            console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
        }
    }

    dog.eat('소주');