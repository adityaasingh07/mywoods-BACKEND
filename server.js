const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

// =======================
// Load Environment Variables FIRST
// =======================
dotenv.config();

// =======================
// Imports
// =======================
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// =======================
// Fix MongoDB DNS Issue
// =======================
dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

// =======================
// Connect MongoDB
// =======================
connectDB();

// =======================
// Initialize Express
// =======================
const app = express();

// =======================
// Middleware
// =======================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// =======================
// API Routes
// =======================
app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

// =======================
// Test Route
// =======================
app.get("/", (req, res) => {
  res.send("🚀 Wood CMS Backend is Running...");
});

// =======================
// Start Server
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});