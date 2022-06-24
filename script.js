// generate button
var generateBtn = document.querySelector("#generate");

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
  let aNumber = Number(window.prompt("How many characters would you like your password to contain?"),"");   //prompt user for password length

  if(aNumber >= 8 && aNumber <= 128) {  //password length 8-128
    let pswdLength = aNumber;
  } else {
    alert("INCORRECT LENGTH - You must choose from 8 to 128 characters."); //length validation
    //reset prompt
  };

  if(window.confirm("Click OK to confirm including numeric characters.")) { //prompt numbers
    function getRndInteger() {
      return Math.floor(Math.random()*10);
    };
  }
  if(window.confirm("Click OK to confirm including lowercase characters.")) { //prompt lowercase
    let lowercase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
  }
  if(window.confirm("Click OK to confirm including uppercase characters.")) { //prompt uppercase
    let uppercase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
  }
  if(window.confirm("Click OK to confirm including special characters.")) { //prompt special characters
    let special = charset
  }

  //validate the input - at least one character type should be selected


  //generated password genPswd should match the criteria 
  let genPswd = function () {
  }
      
  return genPswd;   // generated password written to the page
}