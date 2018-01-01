var prompt = require('prompt-sync')();

// code below (replace this example)
var randomNumber = Math.floor(Math.random() * 100);
var previousGuess;
var guessCount = 0;
while (answer != randomNumber) {
	var answer = prompt('Guess a number:');
	console.log(typeof answer);
	if (answer != previousGuess && /\d+/.test(answer)) {
		guessCount++;
	}
	if (typeof answer != 'number') {
		console.log('Not a number!');
	}
	if (answer > randomNumber) {
		console.log('Too High!');
	} else if ( answer < randomNumber) {
		console.log('Too Low');
	} else if (answer == randomNumber) {
		console.log('You guessed correct! It took you ' + guessCount + ' guesses.')
	}
	previousGuess = answer;
}
console.log('You answered: ' + answer);
