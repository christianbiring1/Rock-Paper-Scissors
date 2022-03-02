let concepts = ['Rock', 'Paper', 'Scissors'];
function computerPlay(concepts){
    return concepts[Math.floor(Math.random() * concepts.length)];
}
console.log(computerPlay(concepts));
      