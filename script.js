
// // Assignment Code


// User Input Variables:
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSymbols;

// Password Variable Values

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

numbers = [1,2,3,4,5,6,7,8,9,0]

symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", ";"]


  // Start Function to Generate Password

  function promptUser(){
    var length = prompt("How many characters would you like your password to be? (must be between 8 and 128 characters)")
    if (isNaN(length) === true) {
      alert ("Password length must be a number!")
      return
    }
    if (length<8||length>128) {
      alert ("Password length must be greater than 8 and less than 128 characters")

      return

    }
    var specialchar = confirm("Would you like to include special characters?")
    var lowercasechar = confirm("Would you like to include lower case letters?")
    var uppercasechar = confirm("Would you like to include upper case letters?")
    var numberschar = confirm("Would you like to include numbers?")

    if (specialchar === false && lowercasechar === false && uppercasechar === false && numberschar === false) {

      alert("Please confirm at least one")

      return
    } 

    // Object holding the answers 
    var options = {
      length: length,
      specialchar: specialchar,
      lowercasechar: lowercasechar,
      uppercasechar: uppercasechar,
      numberschar: numberschar
    }

    return options
  }

function random(array) { 
// Grabs random Index from selected array
  var randomIndex = Math.floor(Math.random() * array.length)
  // 
  var randomElement = array[randomIndex]

console.log(randomElement)

  return randomElement

}

function generatePassword() {

  var passoptions = promptUser()
  //
  var possiblechar = []
  var guaranteechar = []
  var finalresult = []

if (passoptions.specialchar === true) {

  // Combines Arrays 
  possiblechar = possiblechar.concat(symbols)
  guaranteechar.push(random(symbols))

}

if (passoptions.lowercasechar === true) {

  // Combines Arrays 
  possiblechar = possiblechar.concat(lowerCase)
  guaranteechar.push(random(lowerCase))

}

if (passoptions.numberschar === true) {

  // Combines Arrays 
  possiblechar = possiblechar.concat(numbers)
  guaranteechar.push(random(numbers))

}

if (passoptions.uppercasechar === true) {

  // Combines Arrays 
  possiblechar = possiblechar.concat(upperCase)
  guaranteechar.push(random(upperCase))

}


for (var i = 0; i < passoptions.length; i++) {
    var actualcharacter = random(possiblechar)

    finalresult.push(actualcharacter)
}

for (var i = 0; i < guaranteechar.length; i++) {
 
  finalresult[i] = guaranteechar[i]
}

return finalresult.join("")

}


var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



generateBtn.addEventListener("click",
  writePassword)
