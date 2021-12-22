var specialCharaters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");  
  passwordText.value = password;                            

}

function generatePassword() {
  var password = '';
  var passwordLength = getLength(); // get password length
  var parameters = getParameters();// create array of available characters

  for (var i = 0; i < passwordLength; i++) {
    password = password.concat(parameters[randomNumber(parameters.length)]);
  }

  return password;
}

function getLength() { // gather length input from user
  var length;

  length = parseInt(prompt("Enter the length of your password."));

  if (length >= 8 && length <= 128) {
    console.log(length);
    return length;
  } else {
    length = '';
    alert('Please select a number between 8 and 128');
    return getLength(); // recursively call itself
  }
}

function getParameters() {
  var hasNumbers = confirm("Include numbers?") // ask for parameters for password array creation
  var hasSpecial = confirm("Include special characters?");
  var hasLowercase = confirm("Include lowercase letters?");
  var hasUppercase = confirm("Include uppercase letters?");

  return createArray(hasNumbers, hasSpecial, hasLowercase, hasUppercase); // returns true/false list for each parameter
}

function createArray(number, special, lowercase, uppercase) {
  var passwordArray = []; // create empty array that will store possible character choices

  if (!number && !special && !lowercase && !uppercase) { // check for parameters
    alert('You must pick at least one paramter.');
    getParameters();
  } else { // validate which arrays to concat to passwordArray
    if (number) { 
      passwordArray = passwordArray.concat(numericCharacters); 
    }
    if (special) { 
      passwordArray = passwordArray.concat(specialCharaters); 
    }
    if (lowercase) { 
      passwordArray = passwordArray.concat(lowerCasedCharacters); 
    }
    if (uppercase) { 
      passwordArray = passwordArray.concat(upperCasedCharacters); 
    }
  }
  
  console.log(passwordArray);
  return passwordArray;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

generateBtn.addEventListener("click", writePassword); 