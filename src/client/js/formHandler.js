async function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8081/data'

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    Client.checkForName(formText)

    postData(url,{formText})
    .then(function () {
        updateInterface();
    })
}
//GET Request
const getData = async (url) => {
    //set variable to hold fetch calls return
    const res = await fetch(url)
    try {
        //retrieve data in json format
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
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
    } catch(error) {
        console.log(error);
    }
}

//update UI
const updateInterface = async () => {
    const request = await fetch('http://localhost:8081/all')

    try {
        const allData = await request.json()
        console.log(allData);
        document.getElementById('polarity').innerHTML = "Polarity: " + allData.polarity;
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + allData.subjectivity;
    } catch (error) {
        console.log(error);
    }
}

export {
    handleSubmit,
    postData,
    getData,
    updateInterface
}
