console.log("Up and running!");

/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

console.log("User flipped: " + cardOne);
console.log("User flipped: " + cardFour);

*/

var cards = [{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];

var gameScore = 0;

function checkForMatch(){
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			gameScore++;
			displayScore();
		} else {
			alert("Sorry, try again.")
			gameScore = 0;
			displayScore();
		}
	}

}

function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}


function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

function resetBoard() {
	cardsInPlay = [];
	document.getElementById('game-board').innerHTML = "";
	createBoard();

}

function resetButton(){
	var button = document.getElementById('resetBtn');
	button.addEventListener('click', resetBoard);
}

var score = document.getElementById('score');

function displayScore(){
	if(gameScore >= 1) {
		score.innerHTML = "<h2>User Score: </h2>" + gameScore;
	} else {
		score.innerHTML = "<h2>User Score: </h2>" + gameScore;
	}	
		;
}


createBoard();
resetButton();




//flipCard(0);
//flipCard(2);





