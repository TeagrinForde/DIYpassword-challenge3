// generate button
var generateBtn = document.querySelector("#generate");
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //number array
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //uppercase array
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //lowercase array
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', '/', '?', '.', '>', ',', '<', '`', '~', '|']; //special characters array

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password to match the given criteria
function generatePassword() {
  console.log("Hey! you clicked the button.");

  var aNumber = Number(window.prompt("How many characters would you like your password to contain?"), "");   //prompt user for password length

  if (aNumber >= 8 && aNumber <= 128) {  //password length 8-128
    var pswdLength = aNumber;
    console.log(pswdLength);
    var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', '/', '?', '.', '>', ',', '<', '`', '~', '|'];
    characters.length = pswdLength; // set pswdLength to characters

    if (window.confirm("Click OK to confirm including numeric characters.")) { //prompt numbers
      console.log('num = true');
      characters.concat(numeric);  //add numeric string to characters
    }
    if (window.confirm("Click OK to confirm including lowercase characters.")) { //prompt lowercase
      console.log('lower = true');
      characters.concat(lowercase); //add lowercase string to characters
    }
    if (window.confirm("Click OK to confirm including uppercase characters.")) { //prompt uppercase
      console.log('upper = true');
      characters.concat(uppercase); //add uppercase string to characters
    }
    if (window.confirm("Click OK to confirm including special characters.")) { //prompt special characters
      console.log('spec = true');
      characters.concat(special); //add special string to characters
    } else {
      alert("You must choose at least one type of character."); //validate input at least one character type selected
      generatePassword(); //reset prompt
    }
  } else {
    alert("INCORRECT LENGTH - You must choose from 8 to 128 characters."); //length validation
    generatePassword(); //reset prompt
  }

    //generated password genPswd should match the criteria 
    function shuffleArray(characters) {
      characters.sort(() => Math.random()-0.5);
    }
    shuffleArray(characters); // shuffle the characters

    var genPswd = characters;

  return genPswd   // generated password written to the page
}