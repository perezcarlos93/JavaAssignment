// Assignment Code
var generateBtn = document.querySelector("#generate");
// var standardChar = "abcdefghijklmnopqrstuvwxyz";
var passwordText = document.querySelector("#password");
var retVal = "";


// Prompts to record user choice
var charLength = prompt("Choose between 6 to 128 characters")
lengthValidation()
var lowerCasesChoice = prompt("Would you like to include lower cases? Enter 'yes' or 'no'")
var upperCasesChoice = prompt("Would you like to include upper cases? Enter 'yes' or 'no'")
var numbersChoice = prompt("Would you like to include numbers? Enter 'yes' or 'no'")
var specialCharactersChoice = prompt("Would you like to include special cases? Enter 'yes' or 'no'")

// Console logging user choices 
console.log("Password Length: " + charLength);
console.log("Upper Cases Included: " + upperCasesChoice);
console.log("Special Characters Included: " + specialCharactersChoice);


//Recording/Validating user choices

    // Validating length of password
    function lengthValidation(){
        if(charLength < 6 || charLength > 128){
            alert("Error! You must choose between 6 to 128 characters")
            passwordText.textContent = "Please reload the page!";
            passwordText.appendClass = "Please reload the page!";
            throw error;
        } else return charLength
    }

    // validating lower case choice
    function lowerValidation(){
        var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        if(lowerCasesChoice === 'yes'){
            return lowerCase;
        }else{
            return;
        }
    };
    
    // validating upper cases choice
    function upperValidation(){
        var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(upperCasesChoice === 'yes'){
            return upperCases
        }else{
            return;
        }
    };

    // validating special characters choice
    function specialValidation(){
        var specialCharacters = "!@#$%^&*()+=";
        if(specialCharactersChoice === 'yes'){
            return specialCharacters;
        }else{
            return;
        }
    };

    // validate numbers choice
    function numbersValidation(){
        var numbers = "1234567890";
        if(specialCharactersChoice === 'yes'){
            return numbers;
        }else{
            return;
        }
    };

// Variable to combine validated user choices with standard character list
    var result = upperValidation() + lowerValidation() + specialValidation() + numbersValidation()

    console.log(upperValidation())
    console.log(lowerValidation())
    console.log(specialValidation())
    console.log(numbersValidation())
    console.log("Character Set: " + result);

    
// Write password to the #password input
    function generatePassword(){
        for(i=0, n = result.length; i < charLength; i++){
            retVal += result.charAt(Math.floor(Math.random() * n))
        }
        return retVal;
    };
    
// Validates answer to ensure user has selected at least one character set
    function validate(){
        if(result === null){
            alert("Error! You must select at least one character set. Please reload page and try again")
        } return
    };

    // Add event listener to generate button
    generateBtn.addEventListener("click", function(){
    validate();   
    passwordText.textContent = generatePassword();

    generateBtn.addEventListener("click", refreshPage())
    });
    


  function refreshPage(){
    window.location.reload();
  };
