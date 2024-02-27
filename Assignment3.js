var prompt = require('prompt-sync')();

// //1
// var num1 = Number(prompt("Enter 1st number of the series: "))
// var num2 = Number(prompt("Enter last number of the series: "))

// var sum =0
// for(num1; num1<=num2; num1++){
//     sum=sum+num1
// }
// console.log("The sum of the series is: ", sum)

//2

// var sum=0
// for(i=2; i<=500; i=i+2){
//     sum=sum+i
// }
// console.log("The sum of all even numbers between 1 and 500 is: ", sum)

//3
// var sum=0
// for(i=1; i<500; i=i+2){
//     sum=sum+i
// }
// console.log("The sum of all odd numbers between 1 and 500 is: ", sum)

//4
// var num= Number(prompt("Enter 1st number of the series: "))
// var dif = Number(prompt("Enter difference between two successive terms: "))
// var n = Number(prompt("Enter the required term of the series: "))

// nth_term = num+((n-1)*dif)
// console.log("The value of " ,n, "th term of the series is: ", nth_term)

// var sum=0
// for(num; num<=nth_term; num=num+dif){
//     sum=sum+num
// }
// console.log("The sum of the series up to the", n,"th term is: ", sum)

var prompt = require('prompt-sync')();


ar =[]

for(var i=0; i<5; i++){
    var a = Number(prompt("Enter ",i+1,"th number: "))
    ar.push(a)
}
console.log(ar)