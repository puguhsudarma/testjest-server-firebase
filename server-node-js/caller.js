const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    return axios.get('http://127.0.0.1:3000/1')
        .then((response) => {
            console.log('SUCCESS: ');
            console.log({ response: response.status });
        })
        .catch((err) => {
            console.log('ERROR: ');
            console.log({ err: err.response.data });
        })
        .then(() => {
            console.log('finally');
            res.send('success');
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
