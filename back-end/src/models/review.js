const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
