// module 방식
import { checkValidationPhone, getToken, sendTokenToSNS } from "./phone";
// commonjs 방식
// const {checkValidationPhone} = require('./phone')

// 핸드폰 토큰 생성하는 API
function createTokenOfPhone(phone) {
  // 1. 핸드폰 번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(phone);
  if (isValid) {
    // 2. 토큰 6자리 생성하기
    const token = getToken();
    // 3. 핸드폰에 토큰 보내주기
    sendTokenToSNS(phone, token);
  }
}

createTokenOfPhone("0102345678");
