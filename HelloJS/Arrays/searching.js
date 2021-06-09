const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes.indexOf('Note 2')); //If it doesn't exist, it'll give -1

const noteObject = [{}, //There is an empty object in the beggining
    {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating is a bit better'
}, {
    title: 'Office Modification',
    body: 'Get a new seat'
}]

console.log(noteObject.indexOf({})); // -1 
//We need to use findIndex();

const index = noteObject.findIndex(function(note, index) {
    console.log(note, index);
    return note.title === 'Habbits to work on' //Will return 2! Stops counting
})

console.log(index);


const findNote = function(notes, noteTitle) {
    const index = notes.findIndex(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
    return notes[index];
}

const note = findNote(notes,'Office modification');
console.log(note);