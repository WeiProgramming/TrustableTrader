const express = require('express')
const app = express();
const port = 3001;
const server = require('http').Server(app);
const axios = require('axios');
const cors = require('cors');

const ygoroot = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
 
app.use(express.json());
app.use(cors());

// YGO API

// Get data from a fuzzy name
app.get(`/api/getCardsByFuzzyName`, (req, res) => {
    // get the post request query param data
    let searchInput = req.query.fname;
    searchInput = searchInput.replace(' ', '%20');
    
    // build the url
    let apiUrl = `${ygoroot}?fname=${searchInput}`;

    // call api with axios
    axios.get(`${apiUrl}`).then((response) => {
        console.log(response.data)
        // return the data request as json
        res.status(200).json(response.data)
    }).catch(e => {
        console.log(e)
        res.status(400).send('There was an error sending your request');
    })
});

// Server start
server.listen(port);
