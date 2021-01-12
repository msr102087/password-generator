// Assignment Code
var generateBtn = document.querySelector("#generate");

//
function promptUser(){
  var length = prompt("How many characters would you like your password to be?")
  if (isNaN(length) === true) {
    alert ("Password length must be a number!")
    return
  }
  if (length<8||length>128) {
    alert ("Password length must be greater than 8 and less than 128 characters")
  }
}
promptUser()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
