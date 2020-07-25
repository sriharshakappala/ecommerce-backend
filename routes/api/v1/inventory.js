const _ = require('lodash');
const express = require('express');
const router = new express.Router();

const Inventory = require('../../../src/models/inventory');

/**
 * @swagger
 * /api/v1/inventory:
 *   get:
 *     tags:
 *       - inventory
 *     summary: Get all inventory
 *     description: Get all available inventory with product name and quantity
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', (req, res) => {
  Inventory.find({}, (err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  });
});

/**
 * @swagger
 * /api/v1/inventory/create:
 *   post:
 *     tags:
 *       - inventory
 *     summary: Create inventory
 *     description: Create inventory with product name and quantity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: The product that needs to be created
 *         required:
 *           - name
 *           - quantity
 *         schema:
 *           $ref: '#/definitions/product_create'
 *         properties:
 *           name:
 *             type: string
 *           quantity:
 *             type: number
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/create', (req, res) => {
  const newInventory = Inventory(req.body);
  newInventory.save((err, product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({
        msg: 'Product saved successfully!',
        product: product
      });
    }
  })
});

/**
 * @swagger
 * /api/v1/inventory/update:
 *   post:
 *     tags:
 *       - inventory
 *     summary: Update inventory
 *     description: Update quantity of the product. This API increments the quantity of the product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: The product id and the quantity
 *         required:
 *           - id
 *           - quantity
 *         schema:
 *           $ref: '#/definitions/product_update'
 *         properties:
 *           id:
 *             type: string
 *           quantity:
 *             type: number
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/update', (req, res) => {
  const id = req.body.id;
  const quantity = req.body.quantity;
  Inventory.findByIdAndUpdate(id, { $inc: { quantity : quantity } }, (err, product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({
        msg: 'Product quantity updated successfully!',
        product: product
      });
    }
  });
});

module.exports = router;
