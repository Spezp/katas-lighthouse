var camelCase = function(input) {
	let camel = input;
	while (camel.includes(' ')){
	let camelIndex = camel.search(/\s/) + 1;
	camel = camel.replace(/\s\w/, camel[camelIndex].toUpperCase());
}
	return camel;	
}

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));