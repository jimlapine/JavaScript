//Get player height in feets
var heightPlayer1 = prompt('Enter player 1 height in feet');
var heightPlayer2 = prompt('Enter player 2 height in feet');
var heightPlayer3 = prompt('Enter player 3 height in feet');

//Compute height in CM
var heightPlayer1CM = heightPlayer1 * 30.48;
var heightPlayer2CM = heightPlayer2 * 30.48;
var heightPlayer3CM = heightPlayer2 * 30.48;

//Get Player ages
var agePlayer1 = prompt('Enter player 1 age in years');
var agePlayer2 = prompt('Enter player 2 age in years');
var agePlayer3 = prompt('Enter player 3 age in years');

//compute player scores
var scorePlayer1 = heightPlayer1CM + agePlayer1 * 5;
var scorePlayer2 = heightPlayer2CM + agePlayer2 * 5;
var scorePlayer3 = heightPlayer2CM + agePlayer2 * 5;

//Determine victor
if (scorePlayer1 > scorePlayer2 && scorePlayer1 > scorePlayer3) {
	alert('player 1 wins! player 1 score: ' + scorePlayer1 + ' player 2 score: ' + scorePlayer2 + ' player 3 score: ' + scorePlayer3);
} else if (scorePlayer2 > scorePlayer1 && scorePlayer2 > scorePlayer3) {
	alert('player 2 wins! player 1 score: ' + scorePlayer1 + ' player 2 score: ' + scorePlayer2 + ' player 3 score: ' + scorePlayer3);
} else if (scorePlayer3 > scorePlayer1 && scorePlayer3 > scorePlayer2) {
	alert('player 3 wins! player 1 score: ' + scorePlayer1 + ' player 2 score: ' + scorePlayer2 + ' player 3 score: ' + scorePlayer3);
} else if (scorePlayer2 === scorePlayer1 && scorePlayer2 === scorePlayer3) {
	alert('It\'s a tie! player 1 score: ' + scorePlayer1 + ' player 2 score: ' + scorePlayer2 + ' player 3 score: ' + scorePlayer3);
} else {
	alert('No one wins, try again! player 1 score: ' + scorePlayer1 + ' player 2 score: ' + scorePlayer2 + ' player 3 score: ' + scorePlayer3);
}

