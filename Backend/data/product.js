const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  discount: { type: Number },
  quantity: { type: Number },
  image: { type: String},
  description: { type: String },
  category: { type: Array }
});
module.exports = mongoose.model("product", productSchema);
    