async function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8081/data'

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    
    if (Client.checkForName(formText)) {
        postData(url, { formText })
            .then(function () {
                updateInterface();
            })
    }
}

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log(error);
    }
}

//update UI
const updateInterface = async () => {
    const request = await fetch('http://localhost:8081/all')

    try {
        const allData = await request.json()
        console.log(allData);
        document.getElementById('results').innerHTML = "Results:-";
        document.getElementById('polarity').innerHTML = "Polarity: " + allData.polarity;
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + allData.subjectivity;
        document.getElementById('polarityConfidence').innerHTML = "Polarity Confidence: " + allData.polarityConfidence;
        document.getElementById('subConfidence').innerHTML = "Subjectivity Confidence: " + allData.subjectivityConfidence;

    } catch (error) {
        console.log(error);
    }
}

export {
    handleSubmit,
    postData,
    updateInterface
}
