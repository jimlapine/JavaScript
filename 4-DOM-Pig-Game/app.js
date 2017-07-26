/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var Game = {
	scorePlayer1 : document.getElementById('score-0'),
	scorePlayer2 : document.getElementById('score-1'),
	currentPlayer1 : document.getElementById('current-0'),
	currentPlayer2 : document.getElementById('current-1'),
	player1Panel : document.getElementsByClassName('player-0-panel')[0],
	player2Panel : document.getElementsByClassName('player-1-panel')[0],
	newButton : document.getElementsByClassName('btn-new')[0],
	rollButton : document.getElementsByClassName('btn-roll')[0],
	holdButton : document.getElementsByClassName('btn-hold')[0],
	dice: document.getElementsByClassName('dice')[0],
	whosTurn: 1,
	start : function(){
		var player1Score = 0,
			player2Score = 0,
			player1Hold = 0,
			player2Hold = 0;
		
		Game.whosTurn = 1;
		Game.swichActivePlayer();
		Game.player1Panel.removeAttribute('style');
		Game.player2Panel.removeAttribute('style');
		Game.dice.removeAttribute('style');
		Game.holdButton.removeAttribute('style');
		Game.rollButton.removeAttribute('style');
		Game.scorePlayer1.innerText = 0;
		Game.scorePlayer2.innerText = 0;
		Game.currentPlayer1.innerText = 0;
		Game.currentPlayer2.innerText = 0;	
		Game.rollButton.addEventListener('click', rollDice);
		Game.holdButton.addEventListener('click', holdScore);
		Game.newButton.addEventListener('click', newGame);
		
		function newGame () {
			Game.start();
		};
		
		function rollDice(){
			var num = Math.floor(Math.random() * 6) + 1;			
			switch(num) {
				case 1:
					Game.dice.src = 'dice-1.png';
					break;
				case 2:
					Game.dice.src = 'dice-2.png';
					break;
				case 3:
					Game.dice.src = 'dice-3.png';
					break;
				case 4:
					Game.dice.src = 'dice-4.png';
					break;
				case 5:
					Game.dice.src = 'dice-5.png';
					break;	
				case 6:
					Game.dice.src = 'dice-6.png';
					break;	
			}

			if (Game.whosTurn === 1) {												
				if (num === 1 ) {
					player1Score = 0;
					Game.whosTurn = 2;
					Game.swichActivePlayer();
				} else {
					player1Score += num;
				}
				Game.scorePlayer1.innerText = player1Score;
			} else {				
				if (num === 1 ) { 
					player2Score = 0;
					Game.whosTurn = 1;
					Game.swichActivePlayer();
				} else {
					player2Score += num;
				}
				Game.scorePlayer2.innerText = player2Score;
			}
		};
		
		function holdScore() {				
			if (Game.whosTurn === 1) {
				Game.scorePlayer1.innerText = 0;
				player1Hold += player1Score;
				Game.currentPlayer1.innerText = player1Hold;
				
				if (player1Hold < 100) {
					Game.whosTurn = 2;
					player1Score = 0;
					Game.swichActivePlayer();
				} else {
					Game.playAgain('Player 1 wins, click ok to play again.');	
				}
			} else {			
				Game.scorePlayer2.innerText = 0;
				player2Hold += player2Score;
				Game.currentPlayer2.innerText = player2Hold;
				
				if (player2Hold < 100) {
					player2Score = 0;
					Game.whosTurn = 1;
					Game.swichActivePlayer();
				} else {
					Game.playAgain('Player 2 wins, click ok to play again.');
				}
			}
		};
	},
	playAgain: function(message) {
		var playAgain = confirm(message);
		
		if (playAgain) {
			Game.start();
		} else {
			Game.end();
		}		
	},
	swichActivePlayer : function () {		
		if (Game.whosTurn === 1) {								
			Game.player2Panel.classList.remove('active');
			Game.player1Panel.classList.add('active');
		} else {											
			Game.player1Panel.classList.remove('active');
			Game.player2Panel.classList.add('active');				
		};				
	},
	end : function() {
		Game.player1Panel.setAttribute('style', 'visibility: hidden');
		Game.player2Panel.setAttribute('style', 'visibility: hidden');
		Game.dice.setAttribute('style', 'visibility: hidden');
		Game.holdButton.setAttribute('style', 'visibility: hidden');
		Game.rollButton.setAttribute('style', 'visibility: hidden');
	}
}

console.log(Game);
Game.start();