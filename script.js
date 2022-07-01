var generateBtn = document.querySelector("#generate"); // generate button
var numeric = '0123456789'; //number string
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //uppercase string
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'; //lowercase string
var special = '!@#$%^&*()_+~`-=*/|'; //special characters string
var passwordText = document.querySelector('#password');
var passwordGen = ''; //empty string to drop collected characters into to generate and shuffle
var isNumeric, isUpper, isLower, isSpecial;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate password to match the given criteria
function generatePassword() {
  console.log("Hey! you clicked the button.");
  
  var aNumber = Number(window.prompt("How many characters would you like your password to contain?"), "");   //prompt user for password length

  if (aNumber >= 8 && aNumber <= 128) {  //password length 8-128
    console.log(aNumber);
  } else {
    alert("INCORRECT LENGTH - You must type a number from 8 to 128 characters."); //length validation
    writePassword(); //reset prompt
  };
  var characters = '';

  var isNumeric = window.confirm("Click OK to confirm including numeric characters.");
  if (isNumeric == true) {  //add numeric characters to string
    characters += numeric;
    console.log(isNumeric);
  }

  var isUpper = window.confirm("Click OK to confirm including uppercase characters.");
  if (isUpper == true) {  //add uppercase characters to string
    characters += upperCase;
    console.log(isUpper);
  }

  var isLower = window.confirm("Click OK to confirm including lowercase characters.");
  if (isLower == true) {
    characters += lowerCase;
    console.log(isLower);
  }

  var isSpecial = window.confirm("Click OK to confirm including special characters.");
  if (isSpecial == true) {
    characters += special;
    console.log(isSpecial);
  }

  if (isNumeric === false && isUpper === false && isLower === false && isSpecial === false) {
    window.alert('You must choose at least one type of character.');
    writePassword();
  }

  console.log(characters);

  var totalCharacters = parseInt(aNumber); //convert to an integer value
  for (var i = 0; i < totalCharacters; i++) { //shuffle and define length
    var randomize = characters.charAt(Math.floor(Math.random() * characters.length));
    passwordGen += randomize;
  };

  return passwordGen; // return generated password to page
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);