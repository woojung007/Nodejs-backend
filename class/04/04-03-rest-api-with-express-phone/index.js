import express from "express";
import { checkValidationPhone, getToken, sendTokenToSNS } from "./phone.js";

const app = express();
const port = 3000;

// request를 JSON형식으로 만들기
app.use(express.json());

// Restful
app.get("/boards", (req, res) => {
  // 1. 데이터를  조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "철수", title: "제목입니다", contents: "내용입니다" },
    { number: 2, writer: "영희", title: "제목입니다", contents: "내용입니다" },
    { number: 3, writer: "훈이", title: "제목입니다", contents: "내용입니다" },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", (req, res) => {
  // 1. 데이터를  등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍어서 확인해보기
  console.log(req.body);
  // DB에 전달하기

  // 2. 저장 결과 알려주기!!
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
