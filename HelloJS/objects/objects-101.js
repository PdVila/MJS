let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author} (Changed title)`)

// Challenge Area
// name, age, location

//Log "Andrew is 27 and lives in Philadelphia."
//Increase age by 1 and print message again

const person = {
    name: 'Peter',
    age: '22',
    location: 'Duarte'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
person.age++; //Increases age by 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
