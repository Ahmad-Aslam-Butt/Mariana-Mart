const mongoose = require('mongoose');

// connecting to MongoDB Server
const mongoURL = 'mongodb://localhost:27017/ecommerce_store'
// const mongoURL = 'mongodb+srv://mahsan0516:5MFotkBM1R0z1IEH@cluster0.ojrjvgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connection', () => {
    console.log('Connected to MongoDB server')
})

db.on('disconnection', () => {
    console.log('Disconnected to MongoDB server')
})

db.on('error', (err) => {
    console.log('MongoDB connection error', err)
})

module.exports = db