const title = document.getElementById('banner')
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const color = ['red','blue','green','violet'];
let today = new Date();
let month = months[today.getMonth()];
let day = days[today.getDay()];
let date =day+","+month+"'"+today.getDate();

title.innerHTML = date;
// function entryColor(){
//     Text.style.color = 
// }


