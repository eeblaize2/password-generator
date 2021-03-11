// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specialCharacters = "!@#$%^&*()";
var finalPassword = "";
var includedCharacters = "";


function generatePassword() {
  var passwordLength = prompt("Please choose a password length between 8 to 128");



  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Please choose a password length between 8 to 128");
  }
  var uppercasePassword = false
  var lowercasePassword = false
  var numericPassword = false
  var specialCharactersPassword = false
  while (!uppercasePassword || !lowercasePassword || !numericPassword || !specialCharactersPassword) {
    uppercasePassword = confirm("Do you want uppercase letters included in password?");
    lowercasePassword = confirm("Do you want lowercase letters included in password?");
    numericPassword = confirm("Do you want to include numbers in password?");
    specialCharactersPassword = confirm("Do you want to include special characters in password?");
  }
  if(uppercasePassword){
    includedCharacters += uppercase
    finalPassword += randomCharacter(uppercase)
  }
  if(lowercasePassword){
    includedCharacters += lowercase
    finalPassword += randomCharacter(lowercase)
  }
  if(numericPassword){
    includedCharacters += numeric
    finalPassword += randomCharacter(numeric)
    
  }
  if(specialCharactersPassword){
    includedCharacters += specialCharacters
    finalPassword += randomCharacter(specialCharacters)
  }
  for ( var i = finalPassword.length; i < passwordLength; i++ ) {
    finalPassword += randomCharacter(includedCharacters)
 }
 return finalPassword;
}

function randomCharacter(characters) {
  return characters.charAt(Math.floor(Math.random() * characters.length));  
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
