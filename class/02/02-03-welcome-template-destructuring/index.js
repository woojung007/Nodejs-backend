const apple = 3;
const banana = 2;

console.log(
  "철수는 사과를 " +
    apple +
    "개, " +
    "바나나를 " +
    banana +
    "개 가지고 있습니다. "
);
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);

function getWelcomeTemplate({ name, age, school }) {
  // 여기서 오늘날짜로 만들기!!
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const createdAt = `${yyyy}-${mm}-${dd}`;

  return `
        <html>  
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름 : ${name}</div>
                <div>나이 : ${age}살</div>
                <div>학교 : ${school}</div>
                <div> 가입일 : ${createdAt}</div>
            </body>
        </html>
    
    `;
}

const user = {
  name: "철수",
  age: "13",
  school: "다람쥐초등학교",
};

const result = getWelcomeTemplate(user);
console.log("result", result);
