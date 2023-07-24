const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Order",
  },
  productId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  subtotal: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
