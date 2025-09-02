const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Models
const userModule = require('./models/Users.jsx');
const productModule = require('./data/product.js');
const purchaseModule = require('./data/purchase.js');
const mostSellingProductsSchema = require('./models/MostSellingProducts.jsx');
const { json } = require("body-parser");

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

// Server 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// -------------------- AUTH ROUTES --------------------

// Login 
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

// Customer Signup 
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

// Admin Signup 
app.post('/adminsignup', async (req, res) => {
  try {
    const user = await userModule.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// -------------------- PRODUCT ROUTES --------------------

// Get all products
app.get("/allproducts", async (req, res) => {
  try {
    const products = await productModule.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Get single product
app.get("/singleproduct/:id", async (req, res) => {
  try {
    const product = await productModule.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Product not found" });
  }
});

// Get products by category
app.get("/category/:category", async (req, res) => {
  try {
    const products = await productModule.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Product not found" });
  }
});

// -------------------- PURCHASE ROUTES --------------------

// Create a new purchase
app.post('/purchase', async (req, res) => {
  const { userid, products, formData, city } = req.body;

  if (!userid || !products || !formData || !city) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const purchaseData = { userid, products, formData, city };

  try {
    const purchase = await purchaseModule.create(purchaseData);
    try {
      const user = await userModule.findById(userid)
      // console.log(user)
      user.cartData = []
      await user.save()
      res.status(200)
    } catch (err) {
      res.status(500).json({ error: err.message || "Something went wrong" });
    }
    res.status(201).json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});


// purchase duplicates prod
app.get("/purchase", async (req, res) => {
  try {
    const products = await purchaseModule.aggregate([
      { $unwind: "$products" },
      {
        $project: {
          _id: 0,
          productId: "$products._id",
          name: "$products.name",
          price: "$products.price",
          discount: "$products.discount",
          quantity: "$products.quantity",
          image: "$products.image",
          description: "$products.description",
          category: "$products.category"
        }
      },
      {
        $group: {
          _id: "$productId",
          name: { $first: "$name" },
          price: { $first: "$price" },
          discount: { $first: "$discount" },
          quantity: { $first: "$quantity" },
          image: { $first: "$image" },
          description: { $first: "$description" },
          category: { $first: "$category" },
          total: { $sum: 1 }
        }
      },
      { $sort: { total: -1 } }
    ])
    // console.log(products);

    await mostSellingProductsSchema.deleteMany({});
    await mostSellingProductsSchema.insertMany(products);

    res.json(products)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// -------------------- CART ROUTES --------------------

// Add/update cart
app.post("/cart", async (req, res) => {
  const { id, prodId, qty } = req.body;
  try {
    const user = await userModule.findById(id);
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    if (!user.cartData) {
      user.cartData = [];
    }

    const existingItem = user.cartData.find((item) => item.productId == prodId);

    if (existingItem) {
      existingItem.qty = qty;
    } else {
      user.cartData.push({ productId: prodId, qty });
    }

    await user.save();

    res.status(200).json({ message: "Product added/updated in cart", cart: user.cartData });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});


// Get cart items
app.get("/getCart/:cartId", async (req, res) => {
  try {
    const user = await userModule.findById(req.params.cartId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const cartProducts = await Promise.all(
      user.cartData.map(async (productItem) => {
        const product = await productModule.findById(productItem.productId);
        if (!product) return null;

        return {
          _id: product._id.toString(),
          name: product.name,
          image: product.image,
          price: product.price,
          discount: product.discount,
          qty: productItem.qty,
        };
      })
    );
    const validCart = cartProducts.filter(item => item !== null);

    res.status(200).json(validCart);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart" });
  }
});

// Remove Cart Item
// app.get("/removeCartItem", async (req, res) => {
//   const { userId, itemId } = req.query;

//   if (!userId || !itemId) {
//     return res.status(400).json({ error: "userId and itemId are required" });
//   }

//   try {
//     // Debug: check user cart before removal
//     const userBefore = await userModule.findById(userId);
//     console.log("Cart before removal:", userBefore?.cart);

//     // Pull by productId - convert itemId string to ObjectId
//     const updatedUser = await userModule.findByIdAndUpdate(
//       userId,
//       {
//         $pull: {
//           cart: { productId: new mongoose.Types.ObjectId(itemId) }
//         }
//       },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     console.log("Cart after removal:", updatedUser.cart);
//     res.status(200).json({ message: "Item removed", cart: updatedUser.cart });
//   } catch (err) {
//     console.error("Error removing cart item:", err);
//     res.status(500).json({ error: err.message || "Something went wrong" });
//   }
// });
app.get("/removeCartItem", async (req, res) => {
  const { userId, itemId } = req.query;

  if (!userId || !itemId) {
    return res.status(400).json({ error: "userId and itemId are required" });
  }

  try {
    const updatedUser = await userModule.findByIdAndUpdate(
      userId,
      {
        $pull: {
          cartData: { productId: new mongoose.Types.ObjectId(itemId) }
        }
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "Item removed", cart: updatedUser.cartData });
  } catch (err) {
    console.error("Error removing cart item:", err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});
