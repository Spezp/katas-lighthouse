var conditionalSum = function(values, condition) {
  let finalSum = 0;
  for (let i = 0; i < values.length; i++) {
  	if (condition === 'even') {
  		if (values[i] % 2 === 0) {
  			finalSum += values[i];
  		}
  	} else if (condition ==='odd') {
  		if (values[i] % 2 !== 0) {
  			finalSum += values[i];
  		}
  	}
  }
  return finalSum
}

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));