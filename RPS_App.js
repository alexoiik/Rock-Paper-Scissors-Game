let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);  //Numbers: 0, 1 or 2
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(3).sup();
    const smallCompWord = "Bot".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('green-glow'); }, 1000)
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(3).sup();
    const smallCompWord = "Bot".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow'); }, 1000)
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sup();
    const smallCompWord = "Bot".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a Draw.`;
    document.getElementById(userChoice).classList.add('white-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('white-glow'); }, 1000)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs": //rock vs scissors => rock
        case "pr": //paper vs rock => paper
        case "sp": //scissors vs paper => scissors
            win(userChoice, computerChoice);
            break;
        case "rp": //rock vs paper => paper
        case "ps": //paper vs scissors => scissors
        case "sr": //scissors vs rock => rock
            lose(userChoice, computerChoice);
            break;
        case "rr": //rock vs rock => X
        case "pp": //paper vs paper => X
        case "ss": //scissors vs scissors => X
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
     game("s");
    })
}

main();