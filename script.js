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

function generatePassword() {

  var passwordLength = getLength();
  console.log(passwordLength);

  var hasNumbers = confirm("Include numbers?") // returns true or false
  console.log(hasNumbers);

  var hasSpecialCharacters = confirm("Include special characters?");
  console.log(hasSpecialCharacters);

  var hasLowercase = confirm("Include lowercase letters?");
  console.log(hasLowercase);

  var hasUppercase = confirm("Include uppercase letters?");
  console.log(hasUppercase);

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
    
    once everything has been answered
      generate a password that matches the criteria
      display the password in the text area 
  */

  return password;
}

function getLength() {
  var length = parseInt(prompt("Enter the length of your password."));

  if (length >= 8 && length <= 128) {
    return length;
  } else {
    alert('Please select a number between 8 and 128');
    getLength(); // recursively call itself
  }
}

// Add event listener to generate button
// waits for a click on red button and runs writePassword() when it is clicked.
generateBtn.addEventListener("click", writePassword); 
