// Assignment Code
var generateBtn = document.querySelector("#generate");

// assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

// Write password to the #password input
function enterpassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
debugger;

//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.alert("welcome to Password Generator!")
/** Generates a password that is filled in the textarea. */
function generatePassword() {
  var result = "";
  // 8 is the length of the password, hardcoded for now.
  for (var i = 0; i < 8; i++) {
    result += getRandomLetter();

  }
  return result;
}

/** Uses getRandomInt(max) below to get a random character from the alphabet. */
function getRandomLetter() {
  let alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('')
  let randomIndex = getRandomInt(alphabet.length - 1)
  let letterResult = alphabet[randomIndex]
  console.log('Letter at index ' + randomIndex + ' is ' + letterResult);
  return letterResult
}

/** Gets a random integer between 0 and max. */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//random characters

//function getRandomLower() {
  //return String.fromCharCode(math.floor(math.random() * 26) + 97);

//function getRandomUpper() {
  //return String.fromCharCode(math.floor(math.random() * 26) + 65);

//function getRandomNumber() {
  //return String.fromCharCode(math.floor(math.random() * 10) + 48);

//function getRandomSymbol() {
    //const symbols = "!#$%&'()*+,-./|:;<=>?@[]^_`{|}"; 
    //return symbols[math.floor(math.random() + symbols.length)
