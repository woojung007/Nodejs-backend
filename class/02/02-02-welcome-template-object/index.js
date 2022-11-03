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

function getWelcomeTemplate(user) {
  return `
        <html>  
            <body>
                <h1>${user.name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름 : ${user.name}</div>
                <div>나이 : ${user.age}살</div>
                <div>학교 : ${user.school}</div>
                <div> 가입일 : ${user.createdAt}</div>
            </body>
        </html>
    
    `;
}

const user = {
  name: "철수",
  age: "13",
  school: "다람쥐초등학교",
  createdAt: "2020-01-02",
};

getWelcomeTemplate(user);
