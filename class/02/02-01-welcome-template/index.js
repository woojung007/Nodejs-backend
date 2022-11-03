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

function getWelcomeTemplate(user, age, school, createdAt) {
  return `
        <html>  
            <body>
                <h1>${user}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름 : ${user}</div>
                <div>나이 : ${age}살</div>
                <div>학교 : ${school}</div>
                <div> 가입일 : ${createdAt}</div>
            </body>
        </html>
    
    `;
}

const user = "철수";
const age = 13;
const school = "다람쥐초등학교";
const createdAt = "2020-01-02";

getWelcomeTemplate(user, age, school, createdAt);
