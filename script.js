import game from './game.js';

// Inputs
const guessField = document.querySelector("input#guess");
const biggestField = document.querySelector("input#big");
const smallestField = document.querySelector("input#small");
// Buttons
const submitButton= document.querySelector("button#submit");
const guessButton= document.querySelector("button#guess");
//Divs
const presetDiv = document.querySelector("div.preset")
const gameDiv = document.querySelector("div.game");
const alertDiv = document.querySelector("div.alert");

submitButton.addEventListener('click',function(){
	const smallest=parseInt(smallestField.value);
	const biggest=parseInt(biggestField.value);
	game.setRange(smallest,biggest);
	presetDiv.style.display="none";
	gameDiv.style.display="block";
})

guessButton.addEventListener('click',function(){
	const guess = parseInt(guessField.value);
	if(game.play(guess)){
		if(game.hasWon){
			gameDiv.style.display="none";
			alertDiv.style.color="green";
		}
		alertDiv.innerHTML=game.alertMessage;
	}else{
		alertDiv.innerHTML="Error, Invalid Guess Number";
	}
})
