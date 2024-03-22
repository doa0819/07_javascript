/* 프로퍼티 접근하기 */

var dog = {
    name : '정민',
    eat : function(food){
        console.log(`${this.name} 이는 ${food}를 맛있게 먹어요 벌컥벌컥`);
    }
};

// 마침표 표기법
console.log(dog.name);
dog.eat('쏴주');

// 대괄호 표기법 - 프로퍼티 키는 반드시 따옴표로 감싼 문자열을 사용한다.
// console.log(dog[name]);
console.log(dog['name']);
dog['eat']('쏴주');

// 프로퍼티의 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시!!!
// 대괄호 표기법을 사용한다.

var obj = {
    'dash-key' : 'dash-key',
    0 : 1
};

// console.log(obj.dash-key);
console.log(obj['dash-key']);

// console.log(obj.0);
// console.log(obj.'0');
console.log(obj['0']);
console.log(obj[0]);


