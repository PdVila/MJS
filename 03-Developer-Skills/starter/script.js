// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Given an array of maximum temperatures, the thermometer
//Displays a string with the given temperatures
//ex) 17c in 1 days, 21c in 3 days

//1st) Combine the 2 data sets into one array
//2nd) Create a function that takes a 'value' from that array
//3rd) Create a for loop that goes through each item in the array,
//4th) console.log the temeprature and the position of the value in the array

const array1 = [ 17, 21, 23 ];
const array2 = [ 12, 5, -5, 0, 4 ];
const array3 = array1.concat(array2);
console.log(array3);

const printForecast = function(arr) {
	for (let i = 0; i < array3.length; i++) {
		console.log(`${array3[i]} degrees celcius in ${i} days.`);
	}
};

printForecast();
