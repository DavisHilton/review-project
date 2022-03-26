// Start your code ***HERE*** ================================================

// 1) create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

let characterTypes = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>,.ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arrayOfCharacterTypes = characterTypes.split('');  //turned string to an array

//console.log(arrayOfCharacterTypes);
//================================================================================

// 2) create a global variable called "pwLength" with a number between 10 and 18

let pwLength = 10;

//================================================================================

// 3) Using the above array and password length variable, create a random password using a    //    for loop inside of a function called "addNewPassword" either saved as an arrow function //    variable or a traditional function

let addNewPassword = ()=>{
    let password = '';
    for(let i; i<=pwLength; i++){
    let randomCharacter = Math.floor(Math.random() * arrayOfCharacterTypes.length);
    password += password.push(randomCharacter[i]);
    }
    console.log(password)
  } 
    



// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ===================================

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ====================================




//===================================================================
//===============   Side note    ====================================
//http://www.net-comber.com/charset.html (chart of all char numbers)

// 26 letters in alphabet but alphbet dont start on list until 97
// so add 97 to get right starting point.
//console.log(Math.floor(Math.random() * 26) + 97)  
//==================================================================

//Create an object of functions;

// const getFunction = {
//     lower : getRandomLower,
//     upper : getRandomUpper,
//     number : getRandomNumber,
//     symbol : getRandomSymbol
// };



// // Get random letter and make it lowere case or Upper case;
// let getRandomLower= ()=>{
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log(getRandomLower())

// let getRandomUpper= ()=>{
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// console.log(getRandomUpper())

// //Get Random Number
// let getRandomNumber= ()=>{
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log(getRandomNumber())

// //Get random symbol
// let getRandomSymbol= ()=>{
// const symbols ="!@#$%^&*(){}[]=<>,.";
// return symbols[Math.floor(Math.random()* symbols.length)]
// }
// console.log(getRandomSymbol())



