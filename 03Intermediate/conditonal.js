// let isLoggedIn = true;
// let isEmailVerified = false;
// let cardInfo = true;

// if(isLoggedIn && isEmailVerified && cardInfo){

//     console.log("You can purchase the course");
// }else{
//     console.log("you are not allowed to purchase");
// }


// let email = true;
// let facebook = false;
// let google = false;

// if(email || facebook || google)
// {
//     console.log("Login is successful !!!!");
// }

//If the user is authenticated, signout should be visible. If user is not authenticated , login button is shown.
// let authenticated = false;

// authenticated ? console.log("SIGNOUT") : console.log("LOGIN");

//create an app with following roles:
// let user = "admin";

// switch (user) {
//     case "admin":
//         console.log("You have full access to App");
//         break;
//     case "test":
//         console.log("You have access to test apps");

//     default:
//         break;
// }

// console.log("Switch completed");


//Falsy values "", 0,null,NaN,undefined

// let user = "2";

// if(2 === user)
// {
//     console.log("success");
// }


// Functions
// function userName(name)
// {
//     return "Hello World";
//     //console.log(`Hello there,${name}. How are you`);
// }
// //userName("Arun");
// //userName("Varun");

// console.log(userName());






var getRole =function(userName1)
{
switch (userName1) {
            case "Arun":
            return `Arun has Admin role`;
            case "Mani":
            return `Mani has Full Stack developer role`;
            case "Sai":
            return `Sai has backend developer role`;
            default:
            return `${userName1} has no role assigned`;
            break;
}
}

//console.log(getUserRole("Arun","test"));
console.log(getRole("arun"));