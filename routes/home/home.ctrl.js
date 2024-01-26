"use strict";


//실제기능을 하는 부분임
const hello = (req, res) => {
    res.render("home/index"); // 앱 셋팅에서 뷰로 경로를 지정해주었음
}
const login = (req, res) =>{
    res.render("home/login");
}


//기능 하나당 객체로 뺄 수 있음.
module.exports = { // 키를 하나만 입력하면 키와같은 밸류를 입력해줌
    hello,
    login,
};