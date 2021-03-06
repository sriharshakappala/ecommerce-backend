const _ = require('lodash');

const Inventory = require('../models/inventory');

// This function reduces / updates inventory after an order is placed successfully
const updateInventory = (orderItems) => {
  productIds = _.map(orderItems, 'product_id')
  orderItems.forEach(o => {
    Inventory.findByIdAndUpdate(o.product_id, { $inc: { quantity : -o.quantity } }, (err, product) => {
      if(err) {
        console.log(err);
      }
    });
  });
}

module.exports = {
  updateInventory: updateInventory,
};
