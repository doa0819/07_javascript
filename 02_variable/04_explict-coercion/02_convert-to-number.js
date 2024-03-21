console.log("==============숫자 타입으로 변환 ===================");

//1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('10'));   // 10
console.log(Number(true));   // 1

// 2. parseInt, parseFloat 함수 이용 (문자열 -> 숫자만 가능하다)    => 자바스트립 에서는 int, float 상관없이 실수로 반환
console.log(parseInt('10'));     // 10
console.log(parseInt('10.01'));

// 3. +단항 산술
console.log(Number('+10'));

// 4. * 산술연산자 이용
console.log('10' * 1);


