//var : 변수 선언시 사용. 변수의 재선언이 가능. 전역변수로 사용 (생략가능 표기를 안하면 var로 인식됨.)
// let : 변수 선언시 사용. 변수의 재선언이 불가능. 블록 레벨 scope적용(지역변수)
// const : 새로운 값을 재할당 불가
var v = 10; // var 변수 선언과 할당을 같이 함
var v = 20;
v++; // 21 v가 하나 증가함.
console.log('v=', v);
let l = 10;
// let l = 20; (변수의 재선언 불가능)
l = 20; // l 변수 할당만 한 것.
console.log('l=', l);
const C = 10;  //(수정불가능한 변수는 대문자로 작성함)
// C = 20;
const Carr = [1, 2, 3]; // JABA_'배열'이라고 부름
Carr[0] = 9;
console.log(Carr);