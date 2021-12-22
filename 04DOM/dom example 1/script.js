var counter = document.querySelector("h2");
var followers = document.querySelector("p");
let count=1;
setInterval(()=> {
if(count<999)
{
count++
counter.innerText=count;
}
},0.1)



setTimeout(()=> {
followers.innerText="Above are the followers on INstagram!!!"
},4100)