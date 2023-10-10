// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다 !
// 랜덤번호가 < 유저번호 down!!!
// 랜덤번호가 > 유저번호 Up!!
// Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let randomNumber = Math.floor(Math.random()*100)*1;
let userInput = document.getElementById('userInput');
let resultTxt = document.getElementById('resultText');
let playBtn = document.getElementById('playButton');
let resetBtn = document.getElementById('resetButton');
let chance = 5;
let gameOver = false;
let numberArray = [];

console.log('정답',randomNumber);

playBtn.addEventListener('click', gamePlay);
resetBtn.addEventListener('click',gameReset);
userInput.addEventListener('focus', function(){
    userInput.value = "";
})
function gamePlay(){
    let inputNum = userInput.value;

    if (inputNum > 100 || inputNum < 0) {
        resultTxt.textContent = "1부터 100 사이의 숫자를 입력 해주세요";
        return;
    }

    if(numberArray.includes(inputNum)){
        resultTxt.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
        return;
    }

    chance--;
    document.getElementById('numberChance').textContent = `${chance} 번 남았습니다`;

    if(randomNumber > inputNum) {
        resultTxt.textContent = "번호 Up";
    } else if (randomNumber < inputNum) {
        resultTxt.textContent = "번호 Down"
    } else {
        resultTxt.textContent = "맞췄습니다!"
        gameOver = true;
    }
    numberArray.push(inputNum);
    if(chance == 0) {
        gameOver = true;
        resultTxt.textContent = "게임 끝났다";
        playBtn.disabled = true;
    } else {
        gameOver = false;
    }
    console.log(chance);
    console.log(numberArray);
}
function gameReset(){
    playBtn.disabled = false;
    userInput.value = "";
    gameOver = false;
    chance = 5;
    resultTxt.textContent = "Up Down 번호 입력";
    numberArray = [];
    document.getElementById('numberChance').textContent  = "";
}