// 핸드폰 토큰 생성하는 API

function createTokenOfPhone(phone) {
  // 1. 핸드폰 번호 자릿수 맞는지 확인하기
  if (phone.length !== 10 && phone.length !== 11) {
    console.log("에러 발생 !!! 핸드폰 번호를 제대로 입력해 주세요!!");
    return;
  }
  // 2. 토큰 6자리 생성하기
  const count = 6;
  if (count === undefined) {
    console.log("에러 발생 !!! 갯수를 제대로 입력해 주세요!!");
    return;
  } else if (count <= 0) {
    console.log("에러 발생 !!! 갯수가 너무 적습니다!!");
    return;
  } else if (count > 10) {
    console.log("에러 발생 !!! 갯수가 너무 많습니다!!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  console.log("result :", result);

  // 3. 핸드폰에 토큰 보내주기
  console.log(`${phone} 번호로 인증번호 ${result}를 전송합니다.`);
}

createTokenOfPhone("0102345678");
