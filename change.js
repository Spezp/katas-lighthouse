var calculateChange = function(total, cash) {
  let change = {
  }
let remainder = (cash - total)
remainder = Math.round(remainder * 100);
console.log(remainder);
while (remainder >= 2000) {
	if(typeof change.twenty != 'number') {
		change.twenty = 0;
	}
	change.twenty++;
	remainder -= 2000;
}
while (remainder >= 1000) {
	if(typeof change.ten != 'number') {
		change.ten = 0;
	}
	change.ten++;
	remainder -= 1000;
}
while (remainder >= 500) {
	if(typeof change.five != 'number') {
		change.five = 0;
	}	change.five++;
	remainder -= 500;
}
while (remainder >= 200) {
	if(typeof change.toonie != 'number') {
		change.toonie = 0;
	}
	change.toonie++;
	remainder -= 200;
}
while (remainder >= 100) {
	if(typeof change.loonie != 'number') {
		change.loonie = 0;
	}
	change.loonie++;
	remainder -= 100;
}
while (remainder >= 25) {
	if(typeof change.quarter != 'number') {
		change.quarter = 0;
	}
	change.quarter++;
	remainder -= 25;
}
while (remainder >= 10) {
	if(typeof change.dime != 'number') {
		change.dime = 0;
	}
	change.dime++;
	remainder -= 10;
}
while (remainder >= 5) {
	if(typeof change.nickel != 'number') {
		change.nickel = 0;
	}
	change.nickel++;
	remainder -= 5;
}
while (remainder >= 1) {
	if(typeof change.penny != 'number' ) {
		change.penny = 0;
	}

	change.penny++;
	remainder=Math.round(remainder);
	remainder -= 1;
}
return change;
}

console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(5.01, 10));

// { twoDollar: 1, dime: 1, penny: 3 }
// { ten: 1, twoDollar: 1, dollar: 1, quater: 3, penny: 2 }
// { twoDollar: 2, quater: 3, dime: 2, penny: 4 }