var talkingCalendar = function(date) {

	let theDay = date[8] + date[9];
	let theYear = date[0] + date[1] + date[2] + date[3];
	let theMonth = date[5] + date[6];

	switch (theMonth) {
		case '01': theMonth = 'January'
		break;
		case '02': theMonth = 'Febuary'
		break;
		case '03': theMonth = 'March'
		break;
		case '04': theMonth = 'April'
		break;
		case '05': theMonth = 'May'
		break;
		case '06': theMonth = 'June'
		break;
		case '07': theMonth = 'July'
		break;	
		case '08': theMonth = 'August'
		break;
		case '09': theMonth = 'September'
		break;
		case '10': theMonth = 'October'
		break;
		case '11': theMonth = 'November'
		break;
		case '12': theMonth = 'December'
		break;
		default: theMonth = 'Invald Date'
	}
	if (theDay[0] === '0') {
		theDay = theDay[1];
	}
	if (theDay == 1 || theDay == 21 || theDay == 31) {
		theDay = theDay + 'st';
	} else if (theDay == 2 || theDay == 22) {
		theDay = theDay + 'nd';
	} else if (theDay == 3 || theDay == 23) {
		theDay = theDay + 'rd';
	} else {
		theDay = theDay + 'th';
	}
	return `${theMonth} ${theDay}, ${theYear}.`;
	


}

console.log(talkingCalendar('2017/12/01'));
console.log(talkingCalendar('2007/11/02'));
console.log(talkingCalendar('1987/08/03'));
console.log(talkingCalendar('1938/03/04'))