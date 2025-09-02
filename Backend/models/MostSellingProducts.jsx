const mongoose = require('mongoose')

const mostSellingProductsSchema = new mongoose.Schema({
    _id: { type: String },
    total: { type: Number },
    name: { type: String },
    price: { type: Number },
    discount: { type: Number },
    quantity: { type: Number },
    image: { type: String },
    description: { type: String },
    category: { type: Array }
})

module.exports = mongoose.model('MostSellingProducts', mostSellingProductsSchema)