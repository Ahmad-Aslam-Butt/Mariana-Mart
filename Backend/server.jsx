const express = require('express');
const app = express();
const db = require('./db.jsx')
const User = require('./models/Users.jsx')

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // req.body

app.get('/', (req, res) => {
    res.send('Welcome to Express.js')
})

app.post('/login', async (req, res) => {
    try {
        const data = req.body

        const newUser = new User(data)

        const response = await newUser.save()
        console.log('data saved')
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.listen(3000, () => {
    console.log('Port is running on http://localhost:3000')
})