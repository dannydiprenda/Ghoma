// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

var UpperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var LowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function PasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  );

  if (length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (length > 128) {
    alert("Password must be less than 129 characters");
    return;
  }
  var hasSpecialCharacters = confirm("Would you like to include special characters?");
  var hasUpperCaseCharacters = confirm("Would you like to include uppercase characters?");
  var hasLowerCaseCharacters = confirm("Would you like to include lowercase characters?");
  var hasNumericCharacters = confirm("Would you like to include numeric characters?");

  if (hasSpecialCharacters === false && hasNumericCharacters === false && hasLowerCaseCharacters === false && hasUpperCaseCharacters === false) {
    alert("Must confirm a category");
    return;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = PasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(LowerCaseCharacters);
    guaranteedCharacters.push(getRandom(LowerCaseCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(UpperCaseCharacters);
    guaranteedCharacters.push(getRandom(UpperCaseCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i]
  }
  return result.join('');
}

