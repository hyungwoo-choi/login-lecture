"use strict";

const User = require("../../models/User");


const output = {
    hello : (req, res) => {
        res.render("home/index"); // 앱 셋팅에서 뷰로 경로를 지정해주었음
    },
    login : (req, res) =>{
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    },
};


const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response); 

        // // const id = req.body.id,
        // //   psword = req.body.psword;

        // // const users = UserStorage.getUsers("id", "psword");
            
        // // const response = {};

        // // if (users.id.includes(id)) {
        // //     const idx = users.id.indexOf(id);
        // //     if(users.psword[idx] === psword) {
        // //         response.success = true;
        // //         return res.json(response);
        // //     }
        // // }
        // // response.success = false;
        // // response.msg = "로그인에 실패하였습니다.";
        // // return res.json(response);
    },
};



//기능 하나당 객체로 뺄 수 있음.
module.exports = { // 키를 하나만 입력하면 키와같은 밸류를 입력해줌
    output,
    process,
};