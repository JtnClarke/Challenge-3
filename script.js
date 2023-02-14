// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "01234567789"
var symbols = "~!@#$%^&*(){}[]=<>/,."
// assigning strings to variables 

function generatePassword() {
  var charSet = ""
  var charcnt = prompt("Password between 8 and 128 characters");
  var expression1 = charcnt >= 8
  var expression2 = charcnt <= 128
  if (expression1 && expression2) {
    var typeNumber = confirm("Click ok to include numbers letters")
    var typeLower = confirm("Confirm to include lowercase")
    var typeUpper = confirm("Confirm to include uppercase")
    var typeSpecial = confirm("Confirm to include special characters")
    if (typeNumber) {
      charSet += numbers
    }
    if (typeLower) {
      charSet += lowercase
    }
    if (typeUpper) {
      charSet += uppercase
    }
    if (typeSpecial) {
      charSet += symbols
    }
  }
  else {
    confirm("password must be between 8 and 128 characters!")
  }
  console.log(charSet)
  var write = "";

  for (let i = 0; i < charcnt; i++) {
    var randompos = Math.floor(Math.random()*charSet.length)
    write += charSet[randompos]
  }
  return write;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
