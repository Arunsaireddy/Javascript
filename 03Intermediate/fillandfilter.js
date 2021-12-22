// const testArray=[3,5,6,8,4,2,1,9];
// console.log(testArray.fill("***",3,5));//Fill is used to fill a specific data in a array with start and end parameters

// const numbers = [22,77,45,93,74,20,99];
// var result = numbers.filter( (num) => num>22);//Filter used to filter out the data we need .returns an array 
// console.log(result);

var users =["arun","mani","sai","pavan","surya","adc","ergg","fkjhfkhs"];
console.log(users.slice(2,5));//slice is used to cut the elements at start and end values
users.splice(1,3,"HAI");//splice is used to replace the elements with a new element
console.log(users);