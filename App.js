          /* ---- The game is going the computer, so creation of computerPlay function ---- */

let concepts = ['rock', 'paper', 'scissors'];
function computerPlay(concepts){
    return concepts[Math.floor(Math.random() * concepts.length)];
}

/* --- The f(x) that plays a single round --- */

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    return ('The game is tied! Immediately replay to break the tie...');

      if(playerSelection === 'rock' && computerSelection === 'paper')
      return ('You lose! Paper beats Rock');
      
      if(playerSelection === 'rock' && computerSelection === 'scissors')
      return ('You win! Rock beats Scissors');
      
      if(playerSelection === 'scissors' && computerSelection === 'paper')
    return ('You win! Scissors beats Paper');
    
    if(playerSelection === 'scissors' && computerSelection === 'rock')
    return ('You lose! Rock beats Scissors');
    
    if(playerSelection === 'paper' && computerSelection === 'rock')
    return ('You win! Paper beats Rock');
    
    if(playerSelection === 'paper' && computerSelection === 'scissors')
    return ('You lose! Scissors beats Papper');
}
/* ----- Function playerSelection ---- */

function player(){
    userInput = window.prompt('Type in your choice!');
    return userInput;
}
const playerSelection = player().toLowerCase();
console.log(playerSelection);
const computerSelection = computerPlay(concepts);
console.log(computerSelection);

     /* ------ The outcomes of the game ----- */

     console.log(playRound(playerSelection, computerSelection))


      