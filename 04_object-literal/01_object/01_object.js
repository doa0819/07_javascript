/* 객체 */
/* 
    자바스크립트는 객체 기반 프로그래밍 언어로 원시값을 제외한 나머지 값
    (함수, 배열 등등)은 모두 객체이다.
    객체는 0개 이상의 프로퍼티로 구성 된 집합이며,
    프로퍼티는 키(key) 와 값(value) 으로 구성되어 있다.
    자바스크립트에서 사용할 수 있는 모든 값을 프로퍼티 값이 될 수 있다.
    - 프로퍼티 값이 함수일 경우 method 라고 부른다.
 */

/* 객체 생성 방법
    자바, c++ 같은 클래그 기반 객체 지향 언어는 클래스를 사전에 정의하고
    필요한 시점에 new  키워드와 함께 생성자를 호출하여 인스턴스를 생성한다.
    자바스크립트는 프로토타입 기반 객체지향 언어로 
    클래스 기반 객체 지향 언어와는 달리 다양한 객체 생성 방법을 지원한다.
    1. 객체 리터럴
    2. Object 생성자 함수
    3. 생성자 함수
    4. Object.create 메서드
    5. Class(ES6)
    이 방법 중 가장 일반적이고 간단한 방법이 객체 리터럴을 사용하는 방법이다.
    중괄호({}) 내부에 0개 이상의 프로퍼티를 정의한다.
 */

    var student = {
        // key - value 쌍으로 구성 된 프로퍼티
        // 프로퍼티란? 객체의 상태를 나타내는 값(data)
        name : '이도아',
        age : 20,
        // 메소드 : 프로퍼티를 참조하고 조작할 수 있는 동작
        getInfo : function(){
            return `${this.name}(은)는 ${this.age}세 입니다.`;
        }
    };
    console.log(student);
    console.table(student);
    console.log(typeof student);

    // 프로퍼티를 정의하지 않을 시 빈 객체가 생성된다.
    var student2 = {};
    console.log(typeof student2);
    console.log(student2);


