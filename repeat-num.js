var repeatNumbers = function(data) {
  
  let combinedString ='';
  let indexNumber = 0;
  while(indexNumber < data.length) {  
  	let string = [];
  	while (string.length < data[indexNumber][1]) {
  		string.push(data[indexNumber][0])
  	}
  	if (indexNumber === 0) {
  		string = string.join('')
  		combinedString = `${string}`
  	} else if (data.length > 1) {
  		string = string.join('')
  		combinedString = `${combinedString}, ${string}`
  	}
  	indexNumber++;

  }
  return combinedString;
}

console.log(repeatNumbers([[24, 10]]))
console.log(repeatNumbers([[1, 2], [2, 3]]))
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))

// 1111111111
// 11, 222
// 10101010, 343434343434, 9292