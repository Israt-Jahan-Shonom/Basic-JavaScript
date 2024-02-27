//1

// var prompt = require('prompt-sync')();
// num1= Number(prompt("Enter the first number: "))
// num2= Number(prompt("Enter the second number: "))

// function summation(num1, num2){
//     return num1+num2
// }
// function substract(num1, num2){
//     return num1-num2
// }
// function multiply(num1, num2){
//     return num1*num2
// }


// function calculate(num1, num2, summation, substract, multiply){
//     var sum = summation(num1,num2)
//     var sub = substract(num1,num2)
//     var mul = multiply(num1,num2)
//     console.log("Summation is: ", sum, "\n","Substraction is: ", sub, "\n","Multiplication is: ", mul)
// }

// calculate(num1,num2, summation, substract, multiply)

//2

// function greet(name="Guest"){
//     console.log("Welcome",name)
// }
// greet()

//3

// var ar=[1,2,3,4]

// var square = ar.map(ar=>ar*ar)

// console.log("Square of the array is: ", square)

//4

function func(x){
    var y = (x**2)+(2*x)+6
    return y
}
console.log(func(6))