var user ={
    firstName :"Arun",
lastName:"Sai",
loggedInCount:22,
courseList:[],
buyCourse:function (courseName){
    this.courseList.push(courseName);
},
getCourseCount:function()
{
return `${this.firstName} has enrolled in ${this.courseList.length} courses`;
},
getInfo: function()
{
    return `User Name is : ${this.firstName} he has logged in ${this.loggedInCount} times and purchased ${this.courseList.length} courses
            `;
},
};

console.log(user.firstName);
user.buyCourse("MERN Stack Development");
console.log(user.getCourseCount());
console.log(user.getInfo());