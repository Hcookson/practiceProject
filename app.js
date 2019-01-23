// delcaring variables
var scores, roundScore, activePlayer, gamePlaying;

init();

// on click function displaying dice images depending on number rolled
document.querySelector('.btn-roll').addEventListener('click', function() {
     if(gamePlaying) {
    // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // adding score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();

        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
// add current score to player's global score
    scores[activePlayer] += roundScore;
// scores[activePlayer] = scores[activePlayer] + roundScore;

// update UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

// Check if player won the game
    if (scores[activePlayer] >= 50) {
        document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;

    } else {
        nextPlayer();
    }
}

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
     // toggling the class "active" which shows which player is currently selected
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);
// using the DRY principle and nesting all of these functions in one function to start the game
function init () {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
};