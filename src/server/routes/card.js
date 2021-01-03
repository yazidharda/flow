const express = require('express');

var router = express.Router();
const card = require('../controllers/card.js');

// GET
// Fetch all cards
router.get('/', card.findAll);
// Fetch a specific card
router.get('/:nb', card.findOne);

// POST
// Create a card
router.post('/', card.create);

// PUT
// Update a card with username
router.put('/', card.changeStatus);

// DELETE
// Delete a card with username
router.delete('/:nb', card.delete);

module.exports = router;
