// JavaScript source code
/*2.js동적인 부분*/
    name = prompt('이름은?', "고길동"); // 취소를 클리하면'null'이 들어감.
    if (name != 'null' && name != '') {
        document.write(name + '님 하이<br><br>');
}