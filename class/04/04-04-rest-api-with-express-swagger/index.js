// const express = require('express');
import express from "express";
import { checkValidationPhone, getToken, sendTokenToSNS } from "./phone.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 3000;

app.use(express.json());
// 주소, 그림, swagger-jsdoc
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", (req, res) => {
  const result = [
    { number: 1, writer: "철수", title: "제목입니다", contents: "내용입니다" },
    { number: 2, writer: "영희", title: "제목입니다", contents: "내용입니다" },
    { number: 3, writer: "훈이", title: "제목입니다", contents: "내용입니다" },
  ];

  res.send(result);
});

app.post("/boards", (req, res) => {
  console.log(req.body);

  res.send("등록에 성공하였습니다!!");
});

app.post("/tokens/phone", (req, res) => {
  const phone = req.body.phoneNumber;
  const isValid = checkValidationPhone(phone);
  if (isValid) {
    const token = getToken();
    sendTokenToSNS(phone, token);
    res.send("인증완료!!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
