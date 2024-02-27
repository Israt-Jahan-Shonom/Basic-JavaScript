// var person = {
//     name: "Shonom",
//     age: 23,
//     occupation: "Student",
//     func: function(){
//         return "Name of the person is "+ this.name+"."+ " Her age is "+ this.age+"."+ "And she is a "+ this.occupation+"."
//     }
// }

// console.log(person.func())

// person.age = 24

// person.hobbies = "Cooking and Reading books"

// var uperson = function(){
//     return "Name of the person is "+ person.name+"."+ " Her age is "+ person.age+"."+ " And she is a "+ person.occupation
//     +"."+ " Her hobbies are "+person.hobbies+"."
// }

// console.log(uperson())

// var student = {
//     name: "Shonom",
//     age : 22,
//     numbers: [89, 76, 56],
//     avg: function(){
//         var sum = 0
//         for (var i=0; i<this.numbers.length; i++){
//             sum += this.numbers[i]
//             var avrg = sum/this.numbers.length
//         }
//         console.log("Average of the numbers is: ",avrg) 
//     }
// } 

// student.avg()

var prompt = require('prompt-sync')();

ar=[]

for(var i=0; i<5; i++){
    var a=Number(prompt("Enter a number: "))
    ar.push(a)
}
console.log("Unsorted version of the numbers: ", ar)
console.log("Sorted version of the numbers: ", ar.sort())

