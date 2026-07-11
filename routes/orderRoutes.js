const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
  updateOrderStatus,
  deleteOrder,
  getOrderById,
  getOrdersByEmail,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");



// ===============================
// CREATE ORDER
// POST /api/orders
// ===============================

router.post(

  "/",

  createOrder

);



// ===============================
// GET ALL ORDERS
// GET /api/orders
// ===============================

router.get(

  "/",

  protect,

  getOrders

);



// ===============================
// UPDATE ORDER STATUS
// PUT /api/orders/:id
// ===============================

router.put(

  "/:_id",

  protect,

  updateOrderStatus

);



// ===============================
// EXPORT ROUTER
// ===============================

module.exports = router;
// GET SINGLE ORDER
router.get(
  "/single/:_id",
  protect,
  getOrderById
);

// GET USER ORDERS
router.get(
  "/user/:email",
  getOrdersByEmail
);

// DELETE ORDER
router.delete(
  "/:_id",
  protect,
  deleteOrder
);