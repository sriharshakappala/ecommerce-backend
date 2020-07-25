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
  console.log(req);
  res.status(200).send("test stuff");
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
  const newInventory = Inventory(req.body.product);
  newInventory.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Product saved successfully!');
    }
  })
});

module.exports = router;
