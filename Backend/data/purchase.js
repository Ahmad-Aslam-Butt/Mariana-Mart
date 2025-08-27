const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  customId: { type: String },
  purchId: { type: String },
  purchqty: { type: Number },
  prodId: { type: String },
  prodName: { type: String },
  prodprice: { type: Number },
});
module.exports = mongoose.model("purchase", purchaseSchema);
