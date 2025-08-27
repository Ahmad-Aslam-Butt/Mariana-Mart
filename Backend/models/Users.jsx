// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   secondName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  cartData: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qty: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
