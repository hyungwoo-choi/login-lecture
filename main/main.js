"use strict";

//모듈
const express = require('express');
const app = express();

//앱 셋팅
app.set("views","./src/views");
app.set("view engine", "ejs");

//미들웨어, use => 미들웨어를 동록해주는 메서드
const home = require("./src/routes/home"); //  개발자가 자체적으로 만든 모듈을 쓰는것임.
app.use("/", home);

module.exports = app;