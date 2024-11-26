// --------------------------------------  ch 21-25

// question no 1;
// let name = prompt("enter a name");
// let name2 = prompt("enter last name");
// let title = `Welcome to the site ${name }  ${name2}`;
// document.write(title);

//question no 2;
// let mbl = prompt("Enter a favourite mobile");
// let ans = `Your favourite model is ${mbl}.Length of model is${mbl.length}`;
// document.write(ans)

//question no 3
let string = "Pakistani";
let index = string.indexOf("n")
document.write(`String : ${string}; Index : ${index}`+ "<br>");

//question no 4;
let msg = "Hello World";
let index2 = msg.lastIndexOf("l");
document.write(`String : ${msg}; Index : ${index2}`+ "<br>");

//question no 5;
document.write(`String : ${string}; Character at index 3 : ${string[3]}`+ "<br>");

//question no 6;
let replace = "Hyderabad";
document.write(`Word Hyderabad to ${replace.replace("Hyder", "Islam")}`+ "<br>");

//QUESTION NO 08
const message = "Ali and Sami are best friends. They play cricket and football together";
const removeAllOccurrences = message.replaceAll("and","&");
document.write(`Message: ${message} <br> Remove And: ${removeAllOccurrences}`+ "<br>")

//QUESTION NO 09
const valueString = "472";
document.write(`Value: ${valueString} <br>`)
document.write(`Type Of :${typeof(valueString)}` +"<br>")
const changeString = Number(valueString);
document.write(`Value : ${changeString}` + "<br>")
document.write(`Type: ${typeof(changeString)}`+ "<br>");

//question no 10;
// const user = prompt("Enter A input");
// const ans = user.toUpperCase();
// document.write(`User Input: ${user} <br> Uppercase: ${ans}`+ "<br>");

//QUESTION NO 11
// const userInput = prompt("Enter the sentence you want to title case?");
// const convertTitleCase = userInput.split(" ") 
// .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "); 
// document.write(`User input: ${userInput} <br> Title case: ${convertTitleCase}`);

//QUESTION NO 12
const num = 35.36 ;
const numToString = num.toString();
const removeDecimal = numToString.replace(".","")
document.write(`Number: ${num} <br> Result: ${removeDecimal}`+ "<br>");

// question no 13;
// const username = prompt("What is your name ?");
// const invalidCharacters = [33,44,46,64];

// for (let i=0; i<username.length; i++){
//   if(invalidCharacters.includes(username.charCodeAt(i))){
//     alert("Please enter a valid username");
//   }   
// }

//QUESTION NO 14
// const items = ["cake","applepie","cookie","chips","patties"];
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
// const caseSensitive = userInput.toLowerCase();
// if(items.includes(caseSensitive)){
//     alert(`${caseSensitive} is available at index ${items.indexOf(caseSensitive)} in our bakery`)
// }else{
//     alert(`We are sorry ${caseSensitive} is not available in our bakery`)
// }

//question no 15;
// ASCII Code Ranges:
// A-Z (uppercase letters): The ASCII codes range from 65 to 90.
// a-z (lowercase letters): The ASCII codes range from 97 to 122.
// 0-9 (digits): The ASCII codes range from 48 to 57.
// const info = prompt("enter a password");
// if(info.length < 6){
//     alert("Password must be at least long 6 characters")
// } else if (!isNaN(info.charAt(0))){
//     alert("Password must not be start with number")
// } else if (!/[a-zA-Z]/.test(userInput) || !/[0-9]/.test(userInput)) {
//         alert("Password must contain both letters and numbers.");
//     } else {
//         alert("Password is valid!" + "<br>");
//     }

//question no 16;
let uni = "Karachi University"
let spl = uni.split("")
document.write(spl + "<br>");

//question no 17;
let string2 = "Pakistani";
let index3 = string.charAt(string2.length-1)
document.write(`String : ${string2}; Index : ${index3}`+ "<br>");

//QUESTION NO 18
const sentence = "The quick brown fox jumps over the lazy dog";
const sentenceInLowercase = sentence.toLowerCase();
const words = sentenceInLowercase.split(" ");

let count = 0;
for(let i=0; i<words.length; i++){
    if(words[i]==="the"){
        count++
    }
}
document.write(`Text: ${sentence} <br> There are ${count} occurrences of word 'the'`)
// ---------------------------------- CH 26___30;--------------------
document.write("<h2>Ch 26__30</h2>")

// question no1;

// let user = prompt("Enter a positive integer(decimal)");
// let change = parseFloat(user);
// if(isNaN(user)|| user < 0 || Number.isInteger(change)){
//     alert("Please enter a valid number")
// } else {
//     const roundOff = Math.round(change);
//     const floar = Math.floor(change);
//     const ceilNum = Math.ceil(change);
//     document.write(`Number : ${change} <br> RoundOff : ${roundOff} <br> Floor : ${floar} <br> Ceil : ${ceilNum}`)
// }

// question no 2;
// let user2 = prompt("Enter a negative integer(decimal)");
// let change2 = parseFloat(user2);
// if(isNaN(change2)|| user2 >= 0 || Number.isInteger(change2)){
//     alert("Please enter a valid negative floating number")
// } else {
//     const roundOff = Math.round(change2);
//     const floar = Math.floor(change2);
//     const ceilNum = Math.ceil(change2);
//     document.write(`Number : ${change2} <br> RoundOff : ${roundOff} <br> Floor : ${floar} <br> Ceil : ${ceilNum}`)
// }

//QUESTION NO 03
// const userInput = Number(prompt("Enter a number")) ;
// const absoluteValue = Math.abs(userInput);
// document.write(`The absolute value of ${userInput} is ${absoluteValue}`)

//question no 4;
// let dice = prompt("enter a dice number")
// let convert = Number(dice);
// let random = Math.floor(Math.random()*10) + 1;
// document.write(`Dice number is ${random}`);

//QUESTION NO 05
const options = ["head","tail"]
const randomIndex = Math.floor(Math.random()*options.length);
const IndexAdjust = randomIndex+1;
const randomCoin = options[randomIndex]
document.write(`${IndexAdjust} <br> random coin value:${randomCoin}`+ "<br>" + "<br>")

//question no 6;
let randomNum = Math.floor(Math.random()*100) +1;
document.write(`Random Number between 1 and 100 is ${randomNum}`+ "<br>" + "<br>");

//question no 7;
// const userWeight =parseFloat(prompt("Enter your weight in kilograms"));
// document.write(`The weight of user is ${userWeight} in kilograms`)

//question no 8;
let max = prompt("enter a max number");

let randomNumber = Math.floor(Math.random() * max) + 1;

// ----guessing game ---console.log(randomNum);
let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("quitting game");
        break;
    }

    if (guess == randomNumber ) {
        console.log("you are right congrats!! random number is", randomNum);
        break;

    } else if (guess < randomNumber) {
        guess = prompt("your guess was to small. please try again!!")
    }
    else {
        guess = prompt("your guess was to large. please try again!!")
    }
    // else {
    //     guess = prompt("your guess was wrong please try again!");
    // }

}



