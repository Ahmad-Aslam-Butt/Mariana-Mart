const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  userid: { type: String } , 
  products: { type: Array } ,
  formData: { type: Object } ,
  city: { type: String } ,
});
module.exports = mongoose.model("purchase", purchaseSchema);
