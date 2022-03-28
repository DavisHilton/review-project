// Start your code ***HERE*** ================================================

// 1) create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

const values =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>,.ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  

// let valuesArray = valuesString.split('');  //turned string to an array

// console.log(valuesArray);
//=================================================================

// 2) create a global variable called "pwLength" with a number between 10 and 18


let pwLength = +prompt(
  "Input how many charters would you like to use? The max character limit is 50. Once you enter the amount of charters click Generate.");
	
while (pwLength == "" || isNaN(pwLength)) {
   pwLength = prompt(
     "You did not enter any information pleaser try again")
    }

 

//===============================================================

// 3) Using the above array and password length variable, create a random password using aZI
//    for loop inside of a function called "addNewPassword" either saved as an arrow function
//    variable or a traditional function

  let addNewPassword = () => {
    let password = " ";
    for (let i = 1; i <= pwLength; i++) {
      if (pwLength <= 50) {
        password += values.charAt(Math.floor(Math.random() * values.length - 1));
      } else {
        alert(
          `You entered ${pwLength} which is ${pwLength - 50
          } over the max characters limit. Please try again.`
        );
        pwLength = +prompt(
          "Input how many characters would you like to use? The max character limit is 50. Once you enter the amount of characters click Generate."
        );
      }
    }
    return `${password}`;
  };

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

//CAN USE THESE FUNCTIONS TO GET VALUES

// // Get random letter and make it lowere case or Upper case;
// let getRandomLower= ()=>{
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 97 / start of lowercase
// }
// console.log(getRandomLower())

// let getRandomUpper= ()=>{
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 65/ start of uppercase
// }
// console.log(getRandomUpper())

// //Get Random Number
// let getRandomNumber= ()=>{
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 48 start of numbers
// }
// console.log(getRandomNumber())

// //Get random symbol
// let getRandomSymbol= ()=>{
// const symbols ="!@#$%^&*(){}[]=<>,.";
// return symbols[Math.floor(Math.random()* symbols.length)]
// }
// console.log(getRandomSymbol())

// let addNewPassword = () => {
// 	let password = "";

// 	for (let i = 1; i <= pwLength; i++) {
// 		password += values.charAt(Math.floor(Math.random() * values.length - 1));
// 	}
// 	return `${password}`;
// };
