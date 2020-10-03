This project takes user input to create a random password

First, the user is prompted to enter how long they want their password to be.

Users then have a choice of including upper cased letters and special characters. Lower cased letters and numbers are included by default and cannot be excluded by the user.

After the user responds to the prompt, the script runs through functions to validate the users choice. If the user inputs "true" to indicate a yes to the prompt of including upper cased letters, the function identifies it and returns the upper cased character set. If it identifies a "false" entry, it will return "undefined". The same function runs for the special character set as well. 

From here, the variable "result" is defined as the outcome of both functions, added on to the standard character set to create a new standard character set.

The script then runs another function that references the user's chosen length via the first prompt, and creates a loop, choosing one random character from the "result" variable until enough characters are chosen to satisfy the user's chosen length. That function then returns the final result of the randomly generated password. 

Finally, an event clicker is added to the "generate password" button that set's the text box's text content as the result of the looping function, this displaying a randomly generated password that adherers the the user's desired length, and consists of the user's chosen options. 