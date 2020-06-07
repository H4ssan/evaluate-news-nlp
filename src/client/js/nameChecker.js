const validUrl = require('valid-url');

function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if(validUrl.isUri(inputText)){
        console.log("Valid URL!")
    }else{
        console.log("error");
    }

    
}

export { checkForName }
