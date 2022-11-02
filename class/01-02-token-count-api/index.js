// console.log("안녕하세요~~~~");

function getToken(count) {
  // undefined - 원래 비워져 있는 것
  // null - 일부러 비워둔 것
  // count = null

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
}

getToken(6);
