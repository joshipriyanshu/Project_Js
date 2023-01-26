
//Ques 11- Palying with date object

let date = new Date()

let day = date.getDate()

let month = date.getMonth() +1 

let year = date.getFullYear()

let hour = date.getHours()

console.log(day);
console.log(month);
console.log(year);
console.log(` Today's date is ${day}/${month}/${year}`);
console.log("Hour-" + hour)


