const mongoose = require("mongoose");
const Schema = mongoose.Schema

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
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
