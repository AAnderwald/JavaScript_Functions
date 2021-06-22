console.log("Function Excercise")
//excercise 1
function printOdds(count) {
 for (let x = 1; x < count; x++)
    if (x % 2 == 1) { console.log(x); } 
    else {  continue; }
}

printOdds(12); //to print to make sure it works

/*
//bonus
function printOdds(count) {
    for (let y = 1; y < count; y++)
       if (y % 2 == 1) { console.log(y); } 
       else {  continue; }
       if (y < 0) {consol.log("no negative numbers please");}
   }
*/

//excercise 2

function checkAge (userName, age) {
    let aboveSixteen = "Congrats $(userName), you can drive!";
    let belowSixteen = "Sorry $(userName), but you need to wait until you're16.";
        if (age < 16) { console.log(belowSixteen);}
        else {console.log(aboveSixteen);}
       }




let userName = prompt("what is your name");
let age = prompt("What is your age?")
if (!age);
let message; 
if (age >=16) {
   message = "Phew! You've been able to drive for ${age-16} years";
}
else {
   message = "oh no. You wante to wait $16-age} years before you can drive";

}
alert(message);
