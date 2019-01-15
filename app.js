// delcaring variables
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

// creating random function for rolling of dice

// // grabbing current score in html and changing text depending on the number from the dice variable
// document.querySelector('#current-' + activePlayer).textContent = dice;
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x =document.querySelector('#score-0').textContent;
// console.log(x);


// setting starting image of dice to display none
document.querySelector('.dice').style.display = 'none';

// setting scores on start of game
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

// on click function displaying dice images depending on number rolled
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'public/practiceProject/dice-' + dice + '.png';
    // update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // adding score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       roundScore = 0;
    }
});