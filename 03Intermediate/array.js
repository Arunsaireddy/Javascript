var countries = ["India","USA","Canada","Australia"];

//console.log(countries);
//console.log(countries[0]);
countries.pop();//remove the last element of array
//console.log(countries);
countries[2]="England";//Replace element in array
//console.log(countries);
countries.unshift("ABC");//To add array element at the beginning 
console.log(countries);
countries.shift();//Removes the first element of the array.
console.log(countries);
console.log(countries.indexOf("USA"));//get the index number
console.log(Array.from("India"));
