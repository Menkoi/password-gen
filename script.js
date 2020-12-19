// getting element fron HTML //
var characterAmountNumber = document.getElementById
('characterAmountNumber')
var includeUppercaseElement = document.getElementById
('includeUpperCase')
var includeNumberElement = document.getElementById
("includeNumbers")
var includeSymbolsElement = document.getElementById
("includeSymbols")
var form = document.getElementById
("#generate")
var PasswordDisplay = document.getElementById
("password")

// Character codes to list  //
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// EVENT LISTENERS //
characterAmountNumber.addEventListener("input", syncCharacterAmount)

form.addEventListener("click", e => {
  e.preventDefault()
  characterAmount = characterAmountNumber.value
  includeUppercase = includeUppercaseElement.checked
  includeNumber = includeNumberElement.checked
  includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols)
  PasswordDisplay.innerText = password
});

function generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  // Adding the randomizer for the string of values //
  var passwordText = []
  for (let i = 0; i <characterAmount; i++) {
    characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordText.push(String.fromCharCode(characterCode))
  }
  return passwordText.join("")
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for(let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
};



