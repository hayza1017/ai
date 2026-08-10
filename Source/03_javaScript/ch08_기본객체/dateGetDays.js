// now.getNumberOfDay(openday) / openday.getNumberOfDay(now)
Date.prototype.getNumberOfDays = function(thatday){ //now가 this / openday가 thatday
    let interval = Math.abs(this.getTime() - thatday.getTime()); // 두 시점간 밀리세컨
    // if (this>thatday){
    //     interval = this.getTiime() - thatday.getTiime();
    // }else{
    //     interval = thatday.getTiime() - this.getTiime();
    // }
    let day = Math.trunc(interval/(1000*60*60*24)); //소수점에서 짤림
    day = Math.floor(interval/(1000*60*60*24)); //소수점에서 내림
    day = Math.round(interval/(1000*60*60*24)); //소수점에서 반올림
    day = Math.ceil(interval/(1000*60*60*24)); //소수점에서 올림
    return day;
};
// let now = new Date();
// let limitday = new Date(2026, 10, 19, 18, 0, 0); //2026. 11. 19.
// console.log(now.getNumberOfDays(limitday));     
// console.log(limitday.getNumberOfDays(now));
// console.log(now.getNumberOfDays(now));