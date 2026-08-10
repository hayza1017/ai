// ECMA script6이상을 지원하는 브라우저에서만 가능
// 확인 : caniuse.com
class Student{
    constructor(name, kor, mat, eng){ //생성자 이름은 무조건 constructor
        this.name = name;
        this.kor = kor;
        this.mat = mat;
        this.eng = eng;
    }
    getSum(){
        return this.kor + this.mat + this.eng;
    }
    getAvg(){
        return Math.round(this.getSum() / 3) ;
    }
    toString(){
        return 'name : ' + this.name +
                'kor : ' + this.kor +
                'mat : ' + this.mat +
                'eng : ' + this.eng +
                '합계 : ' + this.getSum() +
                '평균 : ' + this.getAvg();
    } // toString
} // class
let dong = new Student('고길동', 92, 52, 78);
document.write(dong) // toString()자동 호출
console.log(dong); // (문자, 숫자, 객체)가 와도 됨.
console.log(`${dong}`); // 템플릿 리터럴에서는 toString()자동 호출