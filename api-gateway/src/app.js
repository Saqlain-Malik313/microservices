const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");

const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// error handler
app.use(errorHandler);

module.exports = app;