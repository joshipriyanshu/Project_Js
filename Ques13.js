
let age = prompt("enter your age ")

let num =  parseInt(age)

if (isNaN(num))  {

    console.log("Please enter a valid number")

} else if (num >= 18) {

    console.log("you are old enough to drive")

} else { 
         let dif = 18-num
   
    console.log("you have " +  dif + "years to get license " );

}