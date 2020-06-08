const validUrl = require('valid-url');

function checkForName(inputText) {
    console.log("::: Running checkForName :::");
    if(validUrl.isUri(inputText)){
        console.log("Valid URL!");
        return {inputText};
    }
    
    if(!validUrl.isUri(inputText)){
            alert("Please enter a valid URL!")
            return;
        }
    }


export { checkForName }
