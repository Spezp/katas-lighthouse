
// Transforms provided strings to different case types
var makeCase = (input, whichCase) => {
	//function block functions
	var everyFirstChar = (input) => {
		let newArray = [];
		for (let arrayIndex = 0; arrayIndex < input.length; arrayIndex++) {
			newArray.push(input[arrayIndex].charAt(0).toUpperCase() + input[arrayIndex].slice(1))
		}
		return newArray;
	}
	var everyFirstChar = (input) => {
		let newArray = [];
		for (let arrayIndex = 0; arrayIndex < input.length; arrayIndex++) {
			newArray.push(input[arrayIndex].charAt(0).toUpperCase() + input[arrayIndex].slice(1))
		}
		return newArray;
	}
	var firstChar = (input) => {
		return input.charAt(0).toLowerCase() + input.slice(1);
	}
	//Function Variables
	let inputString = input;
	const titleWords = ['A','An','The','For','And','Nor','But','Or','Yet','So','At','Around','By','After','Along','For','From','Of','On','To','With','Without','Is'];
	// const titleWords = ['a','an','the','for','and','nor','but','or','yet','so','at','around','by','after','along','for','from','of','on','to','with','without'];
	const vowels = ['i','e','u','a','o'];
	const consonants = [ 'b','c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
	let caseIndex = 0;
	do {
	if (Array.isArray(whichCase) === true) {
		caseArray = whichCase[caseIndex];
		caseIndex++;
	} else {
		caseIndex = NaN;	
		caseArray = whichCase;
	}
	
	switch (caseArray) {


		case 'camel':
		console.log('\nCamel Case test\n')
		while (inputString.includes(' ')){
		let camelIndex = inputString.search(/\s/) + 1;
		inputString = inputString.replace(/\s\w/, inputString[camelIndex].toUpperCase());
		}
		break;

		case 'pascal':
		console.log('\nPascal Case test\n')
		inputString = inputString.replace(inputString[0],inputString[0].toUpperCase());
		while (inputString.includes(' ')){
		let pascalIndex = inputString.search(/\s/) + 1;
		inputString = inputString.replace(/\s\w/, inputString[pascalIndex].toUpperCase());
		}		
		break;

		case 'snake':
		console.log('\nSnake Case test\n')
		while (inputString.includes(' ')){
		inputString = inputString.replace(/\s/, '_');
		}
		break;

		case 'kebab':
		console.log('\nKebab Case test\n')
		while (inputString.includes(' ')){
		inputString = inputString.replace(/\s/, '-');
		}
		break;

		case 'title':
		console.log('\nTitle maker test\n')
		let titleArray = inputString;
		titleArray = titleArray.split(' ');
		titleArray = everyFirstChar(titleArray);
		for(let i = 1; i < titleArray.length; i++) {
			for(let i2 = 0; i2 < titleWords.length; i2++) {
				if(titleArray[i] === titleWords[i2]) {
					titleArray[i] = firstChar(titleArray[i]);
				}
			}	
		}
		inputString = titleArray.join(" ");
		break;

		case 'vowel':
		let vowelArray = [];
		console.log('\nVowel Case Maker\n');
		inputString = inputString.split('');
		for(let i = 0; i < inputString.length; i++) {
			for(let i2 = 0; i2 < vowels.length; i2++) {
				if(vowels[i2] === inputString[i]) {
					vowelArray.push(inputString[i].toUpperCase());
				}
			}
			var checkVowel = (input) => {
				return input === inputString[i]; ;
			}

			if(vowels.some(checkVowel) === false) {
				vowelArray.push(inputString[i]);
		}
	}
	inputString = vowelArray;
	inputString = inputString.join('');
	break;

	case 'consonant':
		let consonantArray = [];
		console.log('\nConsonant Case Maker\n');
		inputString = inputString.split('');
		for(let i = 0; i < inputString.length; i++) {
			for(let i2 = 0; i2 < consonants.length; i2++) {
				if(consonants[i2] === inputString[i]) {
					consonantArray.push(inputString[i].toUpperCase());
				}
			}
			var checkConsonants = (input) => {
				return input === inputString[i]; ;
			}

			if(consonants.some(checkConsonants) === false) {
				consonantArray.push(inputString[i]);
		}
	}
	inputString = consonantArray;
	inputString = inputString.join('');
	break;

	case 'upper':
	inputString = inputString.toUpperCase();
	break;

	case 'lower':
	inputString = inputString.toLowerCase();
	break;
}
}while (caseIndex <= whichCase.length && caseIndex !== NaN);
console.log(inputString);
return inputString;
};
console.log(makeCase('this is a string', 'camel') === 'thisIsAString');
console.log(makeCase('this is a string', 'pascal') === 'ThisIsAString');
console.log(makeCase('this is a string', 'snake') === 'this_is_a_string');
console.log(makeCase('this is a string', 'kebab') === 'this-is-a-string');
console.log(makeCase('is is a nor after from this continuum stringg', 'title') === 'This is a String');
console.log(makeCase('this is a string', 'vowel') === 'thIs Is A strIng');
console.log(makeCase('this is a string', 'consonant') === 'THiS iS a STRiNG');
console.log(makeCase('this is a string', ['upper', 'snake']) === 'THIS_IS_A_STRING');