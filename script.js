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
var generateBtn = document.querySelector("#generate");      // !selects the red 'generate password' button. 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();                        // !create a variable that runs a function to generate a password.
  var passwordText = document.querySelector("#password");   // !selects the textarea in HTML
  passwordText.value = password;                            // !sets the value of the textarea to the password variable

}

/* 
WHEN the button is pressed  
PROMPT for password length (8-128 characters)
  IF password length is less than 8 or greater than 128
    ALERT the user that they must choose a number between 8 and 128
  ELSE 
    STORE user input as password length

PROMPT for lowercase letters
PROMPT for uppercase letters
PROMPT for numeric values
PROMPT to include special symbols
  CHECK to see if no parameters were selected
    IF none were selected
      ALERT user that parameters must be selected
  
ONCE everything has been answered
  generate a password that matches the criteria
  display the password in the text area 
*/

function generatePassword() {

  var passwordLength = getLength();
  console.log(passwordLength);

  console.log(getParameters());

  return password;
}

// gather length input from user
function getLength() {
  var length;

  length = parseInt(prompt("Enter the length of your password."));

  if (length >= 8 && length <= 128) {
    return length;
  } else {
    length = '';
    alert('Please select a number between 8 and 128');
    return getLength(); // recursively call itself
  }
}

function getParameters() {
  // ask for parameters for password array creation
  var hasNumbers = confirm("Include numbers?")
  var hasSpecial = confirm("Include special characters?");
  var hasLowercase = confirm("Include lowercase letters?");
  var hasUppercase = confirm("Include uppercase letters?");

  // returns true/false list for each parameter
  return createArray(hasNumbers, hasSpecial, hasLowercase, hasUppercase);
}

function createArray(number, special, lowercase, uppercase) {
  // create empty array that will store possible character choices
  var passwordArray = [];

  // check for parameters
  if (!number && !special && !lowercase && !uppercase) {
    alert('You must pick at least one paramter.');
    getParameters();
  } else {
    // validate which arrays to concat to passwordArray
    if (number) { passwordArray = passwordArray.concat(numericCharacters); }
    if (special) { passwordArray = passwordArray.concat(specialCharaters); }
    if (lowercase) { passwordArray = passwordArray.concat(lowerCasedCharacters); }
    if (uppercase) { passwordArray = passwordArray.concat(upperCasedCharacters); }
  }
  
  return passwordArray;
}

generateBtn.addEventListener("click", writePassword); 
