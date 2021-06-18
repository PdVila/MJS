'use strict';
// function describeCountry(country, population, capitalCity) {
// 	console.log(`${country} has ${population} people and its capital is ${capitalCity}`);
// }

// let Philippines = describeCountry('philippines', 100, 'Libayung');
// console.log(Philippines);

/*1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)*/

// const totalPopulation = 7900;
// function percentageOfWorld(population) {
// 	return population / totalPopulation * 100;
// }

// let percPhilippines = percentageOfWorld(10);
// let percChina = percentageOfWorld(1441);
// let percBrazil = percentageOfWorld(40);

// console.log(percPhilippines, percChina, percBrazil);

// const percentageOfWorld2 = (population) => population / totalPopulation * 100;
// percPhilippines = percentageOfWorld2(10);
// percChina = percentageOfWorld2(1441);
// percBrazil = percentageOfWorld2(40);
// console.log(percPhilippines, percChina, percBrazil);

// /*LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice */

// function describePopulation(country, population) {
// 	return `${country} has ${population} million people, which is about
//     ${Math.round(percentageOfWorld(population))}% of the world`;
// } // Included Math.round in our return function

// let ph = describePopulation('Philippines', 3123);
// console.log(ph);

// /* LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values */

// // const populations = [ 10, 1441, 332, 83 ];
// // console.log(populations.length === 4);
// // const percentages = [
// // 	percentageOfWorld1(populations[0]),
// // 	percentageOfWorld1(populations[1]),
// // 	percentageOfWorld1(populations[2]),
// // 	percentageOfWorld1(populations[3])
// // ];
// // console.log(percentages);

// // LECTURE: Basic Array Operations (Methods)
// // let neighbors = [ 'neighbor1', 'neighbor2', 'neighbor3' ];
// // neighbors.push('Utopia');
// // console.log(neighbors);
// // neighbors.pop();
// // console.log(neighbors);
// // if (neighbors.includes('Germany')) {
// // 	console.log('A European Country :D');
// // } else {
// // 	console.log('Probably not a European Country');
// // }

// // neighbors[1] = 'Changed';
// // console.log(neighbors);

// // LECTURE: Introduction to Objects
// // 1. Create an object called 'myCountry' for a country of your choice, containing
// // properties 'country', 'capital', 'language', 'population' and
// // 'neighbours' (an array like we used in previous assignments)

// const myCountry = {
// 	country: 'Japan',
// 	capital: 'Tokyo',
// 	language: 'Japanese',
// 	population: 20,
// 	neighbors: [ 'korea', 'philippines', 'china' ],
// 	describe: function() {
// 		return this.country + ' has ' + this.population + ' million people.';
// 	},
// 	checkIsland: function() {
// 		this.isIsland = this.neighbours.length === 0 ? true : false;
// 	}
// };

// console.log(
// 	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors
// 		.length} neighboring countries and a capital called ${myCountry.capital} `
// );

// myCountry.population += 20;
// console.log(myCountry.population);
// myCountry['population'] -= 10;
// console.log(myCountry.population);

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland('korea'));

// LECTURE: Object Methods DONE ABOVE
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property

// const challenge = {};

// let friends = prompt('Who are some friends of Jonas? List them from best to least by comma');
// if (friends) {
// 	console.log(friends);
// } else {
// 	console.log('Please list some names');
// }
// let friendsArray = friends.split(',');
// console.log(friendsArray);

// challenge.friends = friendsArray; //Made a new key and added values
// console.log(challenge);
// challenge.bestFriend = friendsArray[0];
// console.log(challenge);

// console.log(`Jonas has ${friendsArray.length} friends, and his best friend is called ${challenge.bestFriend}.`);
// dsadasddsadasddsadasd

// // Iteration: The for loop
// for (let i = 0; i <= 50; i++) {
// 	console.log(`Voter number ${i} is currently voting`);
// }


// Looping Arrays, Breaking and Continuing 

let listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];