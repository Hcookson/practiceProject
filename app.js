// delcaring variables
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

// creating random function for rolling of dice
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// grabbing current score in html and changing text depending on the number from the dice variable
document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x =document.querySelector('#score-0').textContent;
console.log(x);


// setting starting image of dice to display none
document.querySelector('.dice').style.display = 'none';

// on click function
function btn() {
    // do something
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn);