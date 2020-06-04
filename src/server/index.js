const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");
const cors = require('cors');
const bodyParser = require('body-parser');

//app endpoint
projectData = {};

//set aylien api credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});




const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/data', function (req, res) {

    let apiData = [];
    const urlText = document.getElementById('name').value;

    textapi.sentiment({
        text: urlText
    },
        function (error, response) {
            if (error === null) {
                console.log(response);
            }
        })
});
