///1
var prompt = require('prompt-sync')();

ar=[]

for(var i=0; i<5; i++){
    var a=Number(prompt("Enter a number: "))
    ar.push(a)
}
console.log("Unsorted version of the numbers: ", ar)
// console.log("Sorted version of the numbers: ", ar.sort())

///2
// var ar=[[1,2,3],
//        [4,5,6],
//        [7,8,9]]

// console.log(ar)

// var ar2=[]

// for(var i=0; i<ar.length; i++){
//     for( var j=0; j<3; j++){
//         ar2[i][j]=ar[i][j]+1}
//     }

// console.log(ar2)

// var ar = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log("Original Array: ")
// console.log(ar)


// for (var i = 0; i < ar.length; i++) {
//     for (var j = 0; j < ar[i].length; j++) {
//             ar[i][j] = ar[i][j] + 1
//         }
//     }

// console.log("Increased 3D Array: ")
// console.log(ar)

///3
// var mat = [
//     [2, 7, 89, 6],
//     [90, 45,3, 7],
//     [78, 56, 4, 2]
//   ]

// var ar=[]

// for(var i=0; i<mat.length; i++){
//     for( var j=0; j<mat[i].length; j++){
//         console.log(mat[i][j])
//         ar.push(mat[i][j])
//         }  
//     }

// console.log("Final 1D array is: ", ar)

///4

// ar=[]

// for (var i=0; i<5; i++){
//     var Num = Number(prompt("Enter a number: "))
//     if(Num%2==0){
//         ar.push("Even")
//     }
//     else{
//         ar.push("Odd")
//     }
// }
// console.log(ar)
