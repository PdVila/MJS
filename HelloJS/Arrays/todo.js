//Create an array with 5 todos
// You have x todos (log)
// Print the first and second to last items -> Todo: Walk the Dog

const todo = ['code', 'go to the gym at 1:30', 'code at 3', 'Genshin', 'E7'];
console.log(`You have ${todo.length} things to do today!`);
console.log(`Important Todos: ${todo[0]}, ${todo[todo.length - 2]}`);


const methods = ['method 1', 'method 2', 'method 3', 'method 4']
//Delete 3rd item
methods.splice(2,1) //Remvoes method 3
console.log(methods);
//Add a new item onto the end
methods.push('New last item')
console.log(methods);

//Remove trhe first item from the list 
methods.shift()
console.log(methods);

// Print todo list but like so with forEach()
// 1. The first item
// 2. the second item

todo.forEach(function(item,index){
    const num = index + 1
    console.log(`
        ${num}. ${item}
    `)
})