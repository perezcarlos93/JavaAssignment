// Assignment Code
var generateBtn = document.querySelector("#generate");
var standardChar = "abcdefghijklmnopqrstuvwxyz1234567890";
var passwordText = document.querySelector("#password");
var retVal = "";


// Prompts to record user choice
var charLength = prompt("Choose between 6 to 10")
var upperCasesChoice = prompt("Would you like upper cases? 'true' for yes 'false' for no")
var specialCharactersChoice = prompt("Would you like special cases? 'true' for yes 'false' for no")


// Console logging user choices 
console.log("Password Length: " + charLength);
console.log("Upper Cases Included: " + upperCasesChoice);
console.log("Special Characters Included: " + specialCharactersChoice);


//Recording/Validating user choices

        // validating upper cases choice
    function upperValidation(){
        var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(upperCasesChoice === 'true'){
            return upperCases
        }else{
            return undefined;
        }
    };

        // validating special characters choice
    function specialValidation(){
        var specialCharacters = "!@#$%^&*()+=";
        if(specialCharactersChoice === 'true'){
            return specialCharacters;
        }else{
            return undefined;
        }
    };

// Variable to combine validated user choices with standard character list
    var result = upperValidation() + specialValidation() + standardChar;

    console.log("Character Set: " + result);


// Write password to the #password input
    function generatePassword(){
        for(i=0, n = result.length; i < charLength; i++){
            retVal += result.charAt(Math.floor(Math.random() * n))
        }
        return retVal;
    };


  // Add event listener to generate button
  generateBtn.addEventListener("click", function(){
    passwordText.textContent = generatePassword();
  });