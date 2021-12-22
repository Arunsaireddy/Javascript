var states =["Telangana", "Andhra","Khammam",1955,1968,"Warangal"];
// console.log(states.length);
// for(let i=0;i<states.length;i++)
// {
//     if(typeof states[i] != "string") continue;
// console.log(states[i]);
// }

//states.forEach(a=>console.log(a));//for each loop

// let i=0;
// while (i<states.length) //while loop
// {
// console.log(states[i]);
// i++;
// }


// const names =["youtube","facebook","instagram","Twitter"];
// for (const n of names) { // for-of loop is used for arrays.
//     console.log(n);
// }

const myNames ={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook",
};

for (const k in myNames) { // for-in loop is used for objects.
    console.log(`Key is : ${k} and value is : ${myNames[k]}`);
}