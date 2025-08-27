const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Models
const userModule = require('./models/Users.jsx');
const productModule = require('./data/product.js');
const purchaseModule = require('./data/purchase.js');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connect
mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error", err));

//  Login 
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModule.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

//  Signup 
app.post('/customersignup', async (req, res) => {
  const { firstName, secondName, email, password } = req.body;

  try {
    const existingUser = await userModule.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    const newUser = await userModule.create({ firstName, secondName, email, password });
    res.status(201).json({ success: true, user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.post('/adminsignup', (req, res) => {
  userModule.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
});

//  Products 
app.get("/allproducts", async (req, res) => {
  try {
    const products = await productModule.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

//  Purchases 
app.post('/purchase', (req, res) => {
  purchaseModule.create(req.body)
    .then(purchase => res.json(purchase))
    .catch(err => res.status(500).json(err));
});

//  Server 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// single product
app.get("/singleproduct/:id", async (req, res) => {
  try {
    const product = await productModule.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Product not found" });
  }
});


// Add to Cart
app.post("/cart", async (req, res) => {
  const { id, prodId, qty } = req.body
  try {
    const user = await userModule.findById(id);
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    const existingUserCartItem = user.cartData.find((item) => item.productId == prodId)
    if (!!existingUserCartItem) {
      user.cartData = user.cartData.map(item => {
        if (item.productId == prodId) {
          return { ...item, qty: qty }
        } else {
          return item
        }
      })
      // console.log(user.cartData)
      await user.save();
    }
    else {
      user.cartData.push({ "productId": prodId, "qty": qty });
      await user.save();
    }

    res.json({ message: "Product added to cart", cart: user.cartData });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/getCart/:cartId", async (req, res) => {
  try {
    const user = await userModule.findById(req.params.cartId);
    try {
      const cartProducts = await Promise.all(
        user.cartData.map(async productItem => {
          const products = await productModule.findById(productItem.productId);
          return {
            _id: products._id.toString(),
            name: products.name,
            image: products.image,
            price: products.price,
            discount: products.discount,
            qty: productItem.qty
          };
        }))

      res.json(cartProducts).status(200);
    } catch (error) {
      res.status(500).json({ message: "Error fetching product" });
    }
  } catch (err) {
    4
    res.status(500).json({ message: "Error fetching product" });
  }
});

// category
app.get("/category/:category", async (req, res) => {

  try {
    console.log(req.params.category);
    const products = await productModule.find({ category: req.params.category });

    console.log(products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Product not found" });
  }
});


