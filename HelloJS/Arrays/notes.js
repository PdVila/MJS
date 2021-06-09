const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes);
console.log(notes.length);

//Index to find order of array, STARTS AT 0
console.log(notes[notes.length - 1]) //Get last note

//Add new item at the end of an Array 
notes.push('My new note'); //Now there are 4 items 
//Removes the last item
notes.pop() // Delete, You can return this popped value.

//Remove the first item of the array 
notes.shift();
//Adds an item at the first array index
notes.unshift("my first note");

//Allows us to add element in the middle of array, or remove anywhere 
const test = ['Note 1', 'Note 2', 'Note 3'];
test.splice(1,1) //Starts at index 1 and removes 1 item
//Results in Note 1 and Note 3
test.splice(1,0,'this is the new second item'); // 3rd parameter is adding

//Reassigning new values
notes[2] = ' this is a new value '