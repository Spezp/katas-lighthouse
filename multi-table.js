

var multiplicationTable = function(maxValue) {
	
	var tableArray = [];
	var row = [];
	var tableCount = 1;
	var digits = maxValue*maxValue;
	var rowCount = 1;
	digits = digits.toFixed();
	//digits and spaces(centre rows logic) are used for loop condition logic to output dashes and spaces to give the final tableCount 1 space on either side of it.

// CREATE TOP ROW -----------------------------------------
	for(var i2 = 0; i2 < maxValue; i2++) {
		tableArray.push('+--');
		for (var i = 0; i < digits.length; i++) {
			tableArray.push('-');
		}
		if (i2 === maxValue -1) {
			tableArray.push('+');
		}
	}
	row = tableArray.join('');
	console.log(row);
// CREATE CENTRE ROWS--------------------------------------

	for(var i2 = 0; i2 < maxValue; i2++) {
		tableArray = [];
		for(var i = 0; i < maxValue; i++) {
			tableArray.push('| ' + tableCount + ' ')
			var spaces = tableCount.toFixed();
			for(ii = 0; ii < (digits.length - spaces.length); ii ++) {
				tableArray.push(' ')
			}
			tableCount = tableCount + rowCount;
			if (i === maxValue -1) {//<<<<<<<<<<<<<<<<<<<<<<<<<<<<
				tableArray.push('|');
				console.log(tableArray.join(''))
				rowCount++;
				tableCount = rowCount;
				
			}
			

		}
// LOG LAST ROW--------------------------------------------
		console.log(row);
	}

	return `\n${maxValue} Times Table Complete \n`;
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(15)); 

/*var multiplicationTable = function(maxValue) {
	
	var tableArray = [];
	var row = [];
	var tableCount = 1;

// CREATE TOP ROW -----------------------------------------
	for(var i = 0; i < maxValue; i++) {
		tableArray.push('+----'); 
		if (i === maxValue -1) {
			tableArray.push('+');
		}
	}
	row = tableArray.join('');
	console.log(row);
// CREATE CENTRE ROWS--------------------------------------

	for(var i2 = 0; i2 < maxValue; i2++) {
		tableArray = [];
		for(var i = 0; i < maxValue; i++) {
			tableArray.push('| ' + tableCount + ' ')
			if (tableCount < 10) {tableArray.push(' ')}//<<<<<<<<< Last loop logs row
			if (i === maxValue -1) {//<<<<<<<<<<<<<<<<<<<<<<<<<<<<
				tableArray.push('|');
			console.log(tableArray.join(''))
			}
			tableCount++;
		}
		console.log(row);
	}

	return `\n${maxValue} Times Table Complete \n`;
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10)); */

/*+---+
| 1 |
+---+

+----+----+----+----+----+
| 1  | 2  | 3  | 4  | 5  |
+----+----+----+----+----+
| 2  | 4  | 6  | 8  | 10 |
+----+----+----+----+----+
| 3  | 6  | 9  | 12 | 15 |
+----+----+----+----+----+
| 4  | 8  | 12 | 16 | 20 |
+----+----+----+----+----+
| 5  | 10 | 15 | 20 | 25 |
+----+----+----+----+----+

+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 18  | 20  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 3   | 6   | 9   | 12  | 15  | 18  | 21  | 24  | 27  | 30  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 4   | 8   | 12  | 16  | 20  | 24  | 28  | 32  | 36  | 40  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 5   | 10  | 15  | 20  | 25  | 30  | 35  | 40  | 45  | 50  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 6   | 12  | 18  | 24  | 30  | 36  | 42  | 48  | 54  | 60  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 7   | 14  | 21  | 28  | 35  | 42  | 49  | 56  | 63  | 70  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 8   | 16  | 24  | 32  | 40  | 48  | 56  | 64  | 72  | 80  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 9   | 18  | 27  | 36  | 45  | 54  | 63  | 72  | 81  | 90  |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| 10  | 20  | 30  | 40  | 50  | 60  | 70  | 80  | 90  | 100 |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+*/