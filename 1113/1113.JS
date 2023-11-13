function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice-img').src = userChoice + '.png';
    document.getElementById('computer-choice-img').src = computerChoice + '.png';

    var result = "";

    if (userChoice === computerChoice) {
        result = "平手！";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "你贏了！";
    } else {
        result = "你輸了！";
    }

    document.getElementById('result').innerHTML = result;
}