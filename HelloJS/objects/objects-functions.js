// Passing objects within functions as an argument

//Create function -- take fahrenheit in -- return object with all three temps
// fahrenheit = 50
// celsius = (fahrenheit - 32) * 5/9
// kelvin = (fahrenheit + 459.67) * 5/9;

let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: ((fahrenheit - 32) * 5/9).toFixed(5),
        kelvin: ((fahrenheit + 459.67) * 5/9).toFixed(3),
    }
}

let temps = convertFahrenheit(70);
console.log(temps);