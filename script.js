// // Assignment Code
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

function promptUser(){
var symbols = prompt("Would you like to include special characters?")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// DOM Elements
// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};


// Generator functions  http://www.net-comber.com/charset.html

function getRandomLower() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRandomUpper() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() { 
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() { 
  const symbols = '＆＠＃％＋－＊＝＜＞()[]{｝'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomSymbol())
