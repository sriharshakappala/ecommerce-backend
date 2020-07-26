const _ = require('lodash');
const express = require('express');
const router = new express.Router();

const Order = require('../../../src/models/order');

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
router.post('/create', (req, res) => {
  const newOrder = Order(req.body);
  newOrder.save((err, order) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({
        msg: 'Order placed successfully!',
        product: order
      });
    }
  });
});

module.exports = router;
