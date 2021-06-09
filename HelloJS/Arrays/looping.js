const notes = ['note 1', 'note 2', 'note 3'];

//Executes a function for each item in an array
notes.forEach(function(item, index) { 
    console.log(item) //Gives note 1, 2 3
    //Can also add optional index parameter
    console.log(index);
})


// -----------------------------------

// Counting... 1 (for statement))
for (let i = 0; i <= notes.length; i++){
    console.log(notes[i]);
} //Everytime i is less than the length, it'll keep going