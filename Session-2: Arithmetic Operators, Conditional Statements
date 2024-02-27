/*
Write code: Suppose you have a login system where you can log in by using only any of three names.

1) Determine three names inside your code.'
2) Write a code that takes the user input.
3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” Otherwise, it will display “Welcome! “.
*/

var prompt = require('prompt-sync')();

var name = prompt("Enter your name: ")

if(name == "Israt"){
    console.log("Welcome "+name+"!")
}
else if(name == "Jahan"){
    console.log("Welcome "+name+"!")
}
else if(name == "Sonom"){
    console.log("Welcome "+name+"!")
}
else{
    console.log("Sorry! We do not find you in the system.")
}

/*
Write a code that prompts the user to enter a year. The code should display a message indicating whether the year is a leap year or not.
*/

var year = Number(prompt("Enter a year: "))

if(year%4==0 && year%100 !== 0 || year%400==0){
    console.log(year+" is a leap year") 
}
else{
    console.log(year+ " is not a leap year")
}

/*
Create a simple shopping cart program. The program should:

1) Prompt the user to enter the price of three items one by one.

2) Apply a discount based on the total cost:

3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. Use the formula: discountedCost = totalCost - (totalCost * discount)

4) Display the final cost after applying the discount.
*/

var first = Number(prompt("Price of 1st item: "))
var second = Number(prompt("Price of 2nd item: "))
var third = Number(prompt("Price of 3rd item: "))

var totalCost = first+second+third

if(totalCost>50 && totalCost<100){
    var discount = 0.1
}
else if(totalCost>=100){
    var discount = 0.2
}
discountedCost = totalCost - (totalCost*discount)
console.log(discountedCost)

/*
Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:

1) Prompt the user to enter the scores for three subjects: Math, English, and Science.
2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.
3) Display the final average score.
4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:

A:  > 60 
F: <60
*/

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



