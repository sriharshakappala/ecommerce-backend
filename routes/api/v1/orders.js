const _ = require('lodash');
const express = require('express');
const router = new express.Router();

const Order = require('../../../src/models/order');

const orderValidator = require('../../../src/validators/order-validator');
const inventoryService = require('../../../src/services/inventory-service');

/**
 * @swagger
 * /api/v1/orders:
 *   get:
 *     tags:
 *       - orders
 *     summary: Get all orders
 *     description: Get all orders placed
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(orders);
    }
  });
});

/**
 * @swagger
 * /api/v1/orders/create:
 *   post:
 *     tags:
 *       - orders
 *     summary: Create order
 *     description: Create order with the items available in the inventory
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: The order that needs to be created. This includes account information and order items
 *         required:
 *           - email
 *         schema:
 *           $ref: '#/definitions/order_create'
 *         properties:
 *           email:
 *             type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/create', async (req, res) => {
  let account = await orderValidator.validateOrderPlacedAccount(req.body.order_placed_by);
  if (account.error) {
    res.status(404).send({
      msg: 'Order creation failed!',
      reason: account.error
    });
    return;
  }
  let items = await orderValidator.validateOrderItems(req.body.products);
  if (items.error) {
    res.status(404).send({
      msg: 'Order creation failed!',
      reason: items.error
    });
    return;
  }
  const newOrder = Order({
    order_placed_by: account.order_placed_by,
    items: items,
  });
  newOrder.save((err, order) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({
        msg: 'Order placed successfully!',
        order: order
      });
      inventoryService.updateInventory(req.body.products);
    }
  });
});

module.exports = router;
