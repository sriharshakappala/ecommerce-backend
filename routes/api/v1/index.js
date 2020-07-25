const express = require('express');
const router = new express.Router();

// router.use('/accounts', require('./accounts'));
router.use('/inventory', require('./inventory'));
// router.use('/orders', require('./orders'));

module.exports = router;
