const mongoose = require("mongoose");

const orderItemsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    require: true,
  },

  size: {
    type: String,
  },
  quantity: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  discontedPrice: {
    type: Number,
    require: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});
const OrderItems = mongoose.Schema("orderItems", orderItemsSchema);
module.exports = OrderItems;
