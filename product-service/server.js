require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dns = require("dns");

// DNS fix
dns.setServers(["1.1.1.1", "8.8.8.8"]);

app.use(
  cors({
    origin: "http://localhost:5000", 
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", require("./routes/productRoutes"));

app.get("/", (req, res) => {
  res.send("product Service Running 🚀");
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});