const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express.js')
})

app.listen(3000, () => {
    console.log('Port is running on http://localhost:3000')
})