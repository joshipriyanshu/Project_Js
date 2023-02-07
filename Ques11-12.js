
//Ques 11- Palying with date object

let date = new Date()

let day = date.getDate()

let month = date.getMonth() +1 

let year = date.getFullYear()

let hour = date.getHours()

let minute = date.getMinutes()

let seconds = Date.parse("January 26, 2023")* (0.001)


console.log(day);
console.log(month);
console.log(year);
console.log(` Today's date is ${day}/${month}/${year}`);
console.log("Hour-" + hour)
console.log("Minutes" + minute);

console.log(" Total seconds since 1970 are - " + seconds)



// Question 12 - Different format of dates.

// 1 - DD//MM/YYYY HH:MM format

function Pad2todigits (num) {

    return num.tostring().padstart(2,"0");

}

function datedformat (date) {

    return[   
            Pad2todigits(date.getDate()),
            Pad2todigits(date.getMonth() + 1),
            date.getFullYear(),





    ]. join("/")



}

