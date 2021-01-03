const express = require('express');

var router = express.Router();
const transfer = require('../controllers/transfer');

// GET
// Fetch all transfers
router.get('/', transfer.findAll);
// Fetch a specific transfer
router.get('/:id', transfer.findOne);

// POST
// Create an transfer
router.post('/', transfer.create);

// PUT
// Update an transfer
router.put('/', transfer.update);

// DELETE
// Delete an transfer
router.delete('/:id', transfer.delete);

module.exports = router;
