console.log("Hello World!\n==========\n");
 /*
let isEven = function (number){
    return number % 2 == 0;
};

let answer = isEven (25);       //false

//Declare a function
function printThreeNames (name, name2, name3 = "Unkown") {
    console.log(name, name2, name3);
}
let answer = isEven(18577295783084);    //true

let result = printThreeNames("Ben", "Seth", "Cruz"); // undefined

//function checkAge(userName, age)
*/

//function declaration use var, let or const
function addedAndSquared (num1, num2)  {
    let sum = num1 + num2;
    return sum **2;
}
//function is the keyword, identifier is addedAndSquared, followed by ()  parenthesis. always need even if nothing is in it so it takes two numbers in this case
//parameters need to be seperated by comma, need the body/scop of funtion between the {}; add the two numbers, square it and return the answer, **2 means raised to the second power after will return the value to you

//using a function (involking a function or calling a function)
//addedAndSqured (this is the function)

addedAndSquared(10, 12) // 22 ^2 (raised to the second power) which is 484, orders of num1 and num2 matters

console.log(addedAndSquared(10,12));
console.log(addedAndSquared(2,12));
//or
//let result1 = addedAndSquared(10,12);
//let result2 = addedAndSquared(2,12);
//or even
let result2 = addedAndSquared(10,12); //484
let result3 = addedAndSquared(result2,12);
let result4 = addedAndSquared(result2, result3);
console.log(result4);

alert(result4);

let num1 = parseInt (prompt("type your age in years"));

function calcuateAgeInSeconds(age) {
    let secondsInADay = 24 * 60 * 60;
    let ageInSeconds = age * 365 *secondsInADay;
    return ageInSeconds;

}
// if there are two functions  first in call stack is calculate age in seconds 

function calcuateAgeInSeconds(age) {
    let secondsInADay = alculateSecondsInADay();
    let ageInSeconds = age * 365 *secondsInADay;
    return ageInSeconds;

}

function calculateSecondsInADay(hours = 24) {
    return hours * 60 * 60;
}

let result5 = calcuateAgeInSeconds(num1);
alert(result5);

//going over excercise 1
//declare a functin, take a count (number) as a parameter, print odd from 1 to n
function printdOdds(count){
for (let i = 1; i <= count; i+=2) {
    console.log(i)
    }
}
console.log(i) ;     //nothing will happen
printOdds(100);     //count up to 100
printOdds();        //never runs count is undefined and will be false
printOdds(12);


//excercise 2
// declare function, take in name and age, check age vs 16, diplay message

function canDrive (name1, age) {
    let message; 
    if (age >=16) {
        message = "Phew! You've been able to drive fore ${age-16}";
    }
    else {
        message = "oh no. You wante to wait $16-age} years before you can drive";

    }
    console.log(message);
}
 //to ask for age
 canDrive("Ben", 12) //to test
 let userName = prompt("what is your name");
 let age = prompt("What is your age?")

 //or
 let userName = prompt("what is your name");
 let age = prompt("What is your age?")
 if (!age)
 let message; 
 if (age >=16) {
    message = "Phew! You've been able to drive for ${age - 16} years."; //not working correctly
}
else {
    message = "oh no. You wante to wait ${16-age} years before you can drive";

}

alert(message);
