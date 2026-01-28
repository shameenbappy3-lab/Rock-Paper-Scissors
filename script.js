function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber < 3) return "Rock!";
    if(randomNumber < 6) return "Paper!";
    if(randomNumber <= 9) return "Scissors!";
}

function getHumanChoice(){
    let userChoice = prompt("write rock,paper or scissors to choose!","r").toUpperCase();
    switch(userChoice){
        case "ROCK":
            return "Rock!";
            break;
        case "PAPER":
            return "Paper!";
            break;
        case "SCISSORS":
            return "Scissors!";
            break;
    }
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;

function playRound(humanChoice,computerChoice){

    if(humanChoice === "Rock!"){
        if(computerChoice === "Paper!"){
            computerScore++;
            return "You Lose! Paper Beats Rock!"
        };
        if(computerChoice === "Scissors!"){
            humanScore++;
            return "You Win! Rock Beats Scissors!"
        };
        if(computerChoice === "Rock!"){
            draw++;
            return "Draw! You both chose Rock!"
        };
    }
    if(humanChoice === "Paper!"){
        if(computerChoice === "Rock!"){
            humanScore++;
            return "You Win! Paper Beats Rock!";
        }
        if(computerChoice === "Scissors!"){
            computerScore++;
            return "You Lose! Scissors beats Paper!";
        }
        if(computerChoice ==="Paper!"){
            draw++;
            return "Draw! You Both Choose Papers!";
        }
    }
    if(humanChoice === "Scissors!"){
        if(computerChoice === "Rock!"){
            computerScore++;
            return "You Lose! Rock Beats Scissors!";
        }
        if(computerChoice === "Paper!"){
            humanScore++;
            return "You Win! Scissors Beats Papers!"
        }
        if(computerChoice === "Scissors!"){
            draw++;
            return "Draw! You both choose scissors!"
        }
    }
};




function playGame(){
    for(let i = 0; i < 5 ; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore > computerScore){
        console.log(`You: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);
        return console.log("You Won!!!");
    }else{
        console.log(`You: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);
        return console.log("You Lose!")
    };
}

playGame();
