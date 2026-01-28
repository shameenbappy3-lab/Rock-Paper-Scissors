function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber < 3) return "Rock!";
    if(randomNumber < 6) return "Paper!";
    if(randomNumber <= 9) return "Scissors!";
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

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
            return "Scissors";
            break;
    }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
