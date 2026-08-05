var cnt = 0;
var startTime = new Date().getTime(); // 1970.1.1부터 현재까지의 밀리세컨(1000밀리세컨=1초)
// console.log(startTime);
while(new Date().getTime() <= startTime+1000){
    cnt++; // 1증가하는 연산자임
    // cnt--; // 1감소하는 연산자
}
console.log('1초 동안 while문 수행 횟수 :' + cnt);


cnt = 0;
startTime = new Date().getTime();
do{
    cnt++;
}while(new Date().getTime() <= startTime+1000);
console.log('1초 동안 while문 수행 횟수 :' + cnt);