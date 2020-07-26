const _ = require('lodash');

const Account = require('../models/account');
const Inventory = require('../models/inventory');

const validateOrderPlacedAccount = async (accountId) => {
  const account = await Account.findById(accountId);
  if (account && account.errors == undefined) {
    return {
      order_placed_by: {
        id: account.id,
        email: account.email
      }
    };
  } else {
    return {error: 'Invalid account'}
  }
}

const validateOrderItems = async (orderItems) => {
  productIds = _.map(orderItems, 'product_id')
  let products = await Inventory.find({"_id": {$in : productIds}});
  if (products.length !== orderItems.length) {
    return {error: 'Some of the products in this order are invalid'}
  }
  console.log(products);
  items = []
  let error;
  products.forEach(p => {
    let orderItem = orderItems.find(o => (o.product_id === p.id));
    if (orderItem.quantity > p.quantity) {
      error = `The quantity of ${p.name} in this order exceeds inventory availability`;
    }
    items.push({
      id: p.id,
      name: p.name,
      quantity: orderItem.quantity
    })
  });
  if (error) {
    return {error: error};
  } else {
    return items;
  }
}

module.exports = {
  validateOrderPlacedAccount: validateOrderPlacedAccount,
  validateOrderItems: validateOrderItems,
};
