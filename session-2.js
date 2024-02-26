var prompt = require('prompt-sync')();

//var num1 = prompt("enter first number: ")
// var num2 = prompt("enter second number: ")
// var sum = Number(num1)+Number(num2)
// console.log("The sum of two numbers is: ",sum)

// var sub = Number(num1)-Number(num2)
// console.log("The substraction of two numbers is: ",sub)

// var mul = Number(num1)*Number(num2)
// console.log("The multiplication of two numbers is: ",mul)

// var div = Number(num1)/Number(num2)
// console.log("The division of two numbers is: ",div)

// var remainder = Number(num1)%2
// console.log("The modulus is: ",remainder)

//Increment operator

// num1++
// var a = num1
// console.log(a)
// console.log(num1)

// Decrement operator
// num1--
// console.log(num1)

//Conditional statement

// var a=20
// var b= a<18
// console.log(b)
// if(b){
// console.log("Hi! I am from conditional statement")
// }
// console.log("I am from outside of CS")

//Else if
// var age = Number(prompt("Enter your age: "))

// if(age<18){
//     console.log("You are a teenager")
// }
// else if(age>18){
//     console.log("You are an adult person")
// }
// else{
//     console.log("You are exactly 18")
// }

// var name = prompt("Enter your name: ")

// if(name == "Sonom"){
//     console.log("Welcome "+ name)
// }
// else if(name == "Israt"){
//     console.log("Hello ", name)
// }
// else if(name == "Jahan"){
//     console.log("Hi " + name)
// }
// else{
//     console.log("You are not Sonom. Please contact with her")
// }

//console.log("I am from bottom of the code")

// var num = Number(prompt("Enter a number: "))

// if(num%2==0){
//     num++
//     console.log("It's an even number. After increasing 1, it's now: ", num)
// }
// else if(num%2==1){
//     console.log("It's an odd number")
// }

//Assignment 2

//1

// var name = prompt("Enter your name: ")

// if(name == "Israt"){
//     console.log("Welcome "+name+"!")
// }
// else if(name == "Jahan"){
//     console.log("Welcome "+name+"!")
// }
// else if(name == "Sonom"){
//     console.log("Welcome "+name+"!")
// }
// else{
//     console.log("Sorry! We do not find you in the system.")
// }

//2

// var year = Number(prompt("Enter a year: "))

// if(year%4==0 && year%100 !== 0 || year%400==0){
//     console.log(year+" is a leap year") 
// }
// else{
//     console.log(year+ " is not a leap year")
// }

//3

// var first = Number(prompt("Price of 1st item: "))
// var second = Number(prompt("Price of 2nd item: "))
// var third = Number(prompt("Price of 3rd item: "))

// var totalCost = first+second+third

// if(totalCost>50 && totalCost<100){
//     var discount = 0.1
// }
// else if(totalCost>=100){
//     var discount = 0.2
// }
// discountedCost = totalCost - (totalCost*discount)
// console.log(discountedCost)

//4

var mathScore = Number(prompt("Enter score for Math: "))
var englishScore = Number(prompt("Enter score for English: "))
var scienceScore = Number(prompt("Enter score for Science: "))

average = (mathScore + englishScore + scienceScore) / 3

console.log("Final Average Score is "+ average)

if(average>60){
    console.log("Letter grade is 'A'")
}
else if(average<60){
    console.log("Letter grade is 'F'")
}



