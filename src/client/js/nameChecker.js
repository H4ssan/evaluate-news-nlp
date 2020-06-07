const validUrl = require('valid-url');

function checkForName(formText) {
    console.log("::: Running checkForName :::", formText);
    if(validUrl.isUri(formText)){
        console.log("Valid URL!")
    }else{
        console.log("error");
    }

    
}

export { checkForName }
