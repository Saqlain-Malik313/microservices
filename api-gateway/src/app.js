const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const cartRoutes = require("./routes/cart.routes");

const errorHandler = require("./middlewares/errorHandler");

// ✅ CORS for Vite frontend (port 5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // if using cookies / auth
  })
);

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// error handler
app.use(errorHandler);

module.exports = app;