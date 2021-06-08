let fahrenheit = 35 // 0c - 273.15k
console.log(`Fahrenheit is ${fahrenheit}`)
//Calculate celsius and store in celsius variable
//Print that value
let celsius = (fahrenheit - 32) * 5/9
console.log(`Celsius is ${celsius}`);
//Calculate kelvin value and store in variable
//Print that value
let kelvin = celsius + 273.15;
console.log(`Kelvin is ${Math.round(kelvin)}`) //Math.round()