const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  quantity: Number,
  created_at: Date,
  updated_at: Date
}, { collection: 'inventory', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
