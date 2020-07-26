const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: Number,
  created_at: Date,
  updated_at: Date
}, { collection: 'inventory', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

inventorySchema.plugin(uniqueValidator);

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
