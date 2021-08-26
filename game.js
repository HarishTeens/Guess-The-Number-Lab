const game = {
  title: 'Guess the Number!',
  biggestNum: 0,
  smallestNum: 0,
  secretNum: null,
  prevGuesses:[],
  hasWon:false,
  play: function(guess) {
	if(!this.tryGuess(guess))
		return false;
	this.prevGuesses.push(guess);    
	this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
	this.hasWon= guess===this.secretNum;
	this.alertMessage=this.render(guess);
	return true;
  },
  setRange: function(low,high){	  
	  this.smallestNum=low;
	  this.biggestNum=high;	  
  },
  tryGuess: function(guess) {
	  console.log(guess,this.smallestNum,this.biggestNum);
	  return (guess && (guess >= this.smallestNum && guess <= this.biggestNum));	  
  },
  render: function(guess) {
	  if(this.hasWon){
		  return `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`;
	  }else{
		  const highOrLow= guess>this.secretNum ? 'high':'low';
		  const prevGuesses= this.prevGuesses.join(', ');
		  return `Your guess is too ${highOrLow} \n Previous guesses: ${prevGuesses}`;
	  }
  }
};

export default game;