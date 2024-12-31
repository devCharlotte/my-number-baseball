let answer = generateAnswer();
let attempts = 0;

function generateAnswer() {
    let digits = [];
    while (digits.length < 4) {
        let digit = Math.floor(Math.random() * 10);
        if (!digits.includes(digit)) {
            digits.push(digit);
        }
    }
    return digits.join('');
}

function playGame() {
    const userInput = document.getElementById('userInput').value;
    const message = document.getElementById('message');
    const log = document.getElementById('log');

    if (!isValidInput(userInput)) {
        message.textContent = '잘못된 입력입니다. 4개의 서로 다른 숫자를 입력하세요.';
        return;
    }

    attempts++;
    const result = checkAnswer(userInput);

    if (result.strike === 4) {
        message.textContent = `축하합니다! 정답입니다. (${attempts}번 시도)`;
        log.innerHTML += `<li>${userInput} - 정답!</li>`;
    } else {
        message.textContent = `${result.strike} 스트라이크, ${result.ball} 볼`;
        log.innerHTML += `<li>${userInput} - ${result.strike}S ${result.ball}B</li>`;
    }
}

function isValidInput(input) {
    if (input.length !== 4) return false;
    const set = new Set(input);
    if (set.size !== 4) return false;
    return /^[0-9]+$/.test(input);
}

function checkAnswer(input) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === answer[i]) {
            strike++;
        } else if (answer.includes(input[i])) {
            ball++;
        }
    }

    return { strike, ball };
}

console.log("정답:", answer); 
