var isEven = (element)=>{ //Arrow Function
    return element%2===0;
}

//console.log(isEven(9));

// var isEven = function(element){ //Anonymous function
//     return element%2===0;
// }

// console.log(isEven(9));


// let result= [2,4,6,7,8,9].every(isEven);// every keyword takes every element from the array and performs the operation defined in the every() . Passing the isEven function as a reference
let result= [2,4,6,8].every((e)=>(e%2===0)); // Arrow Callback Function
console.log(result);