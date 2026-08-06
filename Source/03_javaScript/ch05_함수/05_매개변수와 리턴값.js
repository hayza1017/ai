/*05_매개변수와 리턴값*/
console.log(pow(5,3));

// 선언된 매개변수보다 많은 매개변수로 호출할 경우: 뒷부분은 무시
console.log(pow(5, 3, 2, 1, 0));

//선언된 매개변수보다 적은 매ㅐ변수로 호울할 경우 : 전달되지 않는 매개변수에는 undefinesd
console.log(pow(5));
console.log(pow());

function pow(x, y){
    //x의 y승을 return
    console.log(`함수 내의 x=${x}, y=${y}`);
    //result = x ** y;
    return 1;
    for(let cnt=1 ; cnt<=y ; cnt++){
        result *= x; //result = result*x;
    }
    // return result; return이 없으면 undefined로
}