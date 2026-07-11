const Order = require("../models/Order");



// CREATE ORDER

exports.createOrder = async(req,res)=>{


try{


const order = new Order(req.body);


const savedOrder =
await order.save();



res.status(201).json(savedOrder);



}
catch(error){


res.status(500).json({

message:error.message

});


}


};






// GET ALL ORDERS

exports.getOrders = async(req,res)=>{


try{


const orders =
await Order.find()
.sort({
createdAt:-1
});



res.json(orders);


}
catch(error){


res.status(500).json({

message:error.message

});


}


};
// UPDATE ORDER STATUS

exports.updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findByIdAndUpdate(

      req.params.id,

      {
        status: req.body.status
      },

      {
        new: true
      }

    );

    if (!order) {

      return res.status(404).json({
        message: "Order not found"
      });

    }

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
// ===============================
// DELETE ORDER
// ===============================
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// GET SINGLE ORDER
// ===============================
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// GET ORDERS OF A USER
// ===============================
exports.getOrdersByEmail = async (req, res) => {
  try {
    const orders = await Order.find({
      "customer.email": req.params.email,
    }).sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};