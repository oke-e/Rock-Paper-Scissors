console.log("Hi");
const options = ["rock","paper","scissors"];

function getComputerChoice(){
 //this function will randomly return rock, paper, or scissors
     const choice = options[Math.floor(Math.random() * options.length)];
     //randomly selects an item in the options array. Math floor rounds the number down
   return choice;
}


getComputerChoice();

function checkWinner(playerSelection,computerSelection){
    // checks the for winner of the game
    if(playerSelection == computerSelection){
        return "tie"; 
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")       
    ) {
        return "player";
    }
    else {
        return "comp";
    }
   
}

function playRound(playerSelection,computerSelection){
// plays a single round of R,P,S
    const result = checkWinner(playerSelection,computerSelection);
    if (result == "tie"){ 
        return `It's a Tie!! You Both Chose ${playerSelection}` ;
    }
    else if (result == "comp"){
        return `Computer Wins ${computerSelection} beats ${playerSelection}`;
    }
    else if (result == "player") {
        return `Player Wins ${playerSelection} beats ${computerSelection}`;
    }
    else { 
        return "Error";
    }
    

}
function getPlayerChoice(){
    let validateInput = false;
     while(validateInput == false){ // this will loop as long as the input is  false
        const choice = prompt("Rock, Paper, or Scissors");
        if(choice == null){ 
            continue  // the loop will prompt you again if there is no input

        }
        const choiceInLower = choice.toLowerCase() ;
        if (options.includes(choiceInLower) ){ // if what the user types is what is included in the options array then it will execute further
            validateInput = true;
            return choiceInLower;
        } 
     }
    
}
function game(){

    let scorePlayer = 0;
    let scoreComputer = 0;

    console.log("Welcome")
    

   for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection,computerSelection));

    console.log(`Round ${i+1}`);
    console.log("------------");

    if(checkWinner(playerSelection,computerSelection) == "player"){
        scorePlayer++;
    }
     else if(checkWinner(playerSelection,computerSelection) == "comp"){
        scoreComputer ++;
    }
 
 }

console.log("Game Over!");
if(scorePlayer > scoreComputer){
    console.log(`Congrats You Won ${scorePlayer} / 5 :)`);

}
else if (scorePlayer < scoreComputer){
    console.log(`Sorry the Computer has Won this time  ${scoreComputer} / 5 :(`);

}
}
game();
