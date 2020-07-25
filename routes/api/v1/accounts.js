const _ = require('lodash');
const express = require('express');
const router = new express.Router();

const Account = require('../../../src/models/account');

/**
 * @swagger
 * /api/v1/accounts:
 *   get:
 *     tags:
 *       - accounts
 *     summary: Get all accounts
 *     description: Get all available accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', (req, res) => {
  Account.find({}, (err, accounts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(accounts);
    }
  });
});

/**
 * @swagger
 * /api/v1/accounts/create:
 *   post:
 *     tags:
 *       - accounts
 *     summary: Create account
 *     description: Create account with email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: The account that needs to be created
 *         required:
 *           - email
 *         schema:
 *           $ref: '#/definitions/account_create'
 *         properties:
 *           email:
 *             type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/create', (req, res) => {
  const newAccount = Account(req.body);
  newAccount.save((err, account) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({
        msg: 'Account saved successfully!',
        product: account
      });
    }
  })
  // res.status(200).send("test stuff");
});

module.exports = router;
