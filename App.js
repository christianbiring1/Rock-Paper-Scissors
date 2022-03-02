          /* ---- The game is going the computer, so creation of computerPlay function ---- */

let concepts = ['Rock', 'Paper', 'Scissors'];
function computerPlay(concepts){
    return concepts[Math.floor(Math.random() * concepts.length)];
}
console.log(computerPlay(concepts));

  /* --- The f(x) that plays a single round --- */

  function playSingleRound(playerSelection, computerSelection){
      if(playerSelection === computerSelection)
      return ('The game is tied! Immediately replay to break the tie...');

      if(playerSelection === 'Rock' && computerSelection === 'Paper')
      return ('You lose! Paper beats Rock');

      if(playerSelection === 'Rock' && computerSelection === 'Scissors')
    return ('You win! Rock beats Scissors');

    if(playerSelection === 'Scissors' && computerSelection === 'Paper')
    return ('You win! Scissors beats Paper');

    if(playerSelection === 'Scissors' && computerSelection === 'Rock')
    return ('You lose! Rock beats Scissors');

    if(playerSelection === 'Paper' && computerSelection === 'Rock')
    return ('You win! Paper beats Rock');
    
    if(playerSelection === 'Paper' && computerSelection === 'Scissors')
    return ('You lose! Scissors beats Papper');
  }
      