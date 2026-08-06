/* 매개변수가 없으면 -999를 리턴하고 매개변수가 1개 이상이면 누적합을 리턴하는 가변인자 함수 sumAll()을 작성한 스크립트 파일을 이용하시오. */
function sumAll(){
    let result = 0;
    if(arguments.length>0){
        // for(let idx=0; idx<arguments.length; idx++){
        //     result += arguments[idx];
        
        // for(let idx in arguments){
        //     result += arguments[idx];
        // }

        for(let data of arguments){
            result += data;
        }
    }
    else{
        result = -999;
    }
    return result;
}

// console.log(sumAll());
// console.log(sumAll(1, 2, 3));