const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    require: true,
    ref: "User",
  },
  orderDate: {
    type: Date,
    require: true,
  },
  totalAmount: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
