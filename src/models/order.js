const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  order_placed_by: Object,
  items: Object,
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
