const express = require('express');

var router = express.Router();
const creditLine = require('../controllers/creditLine.js');

// GET
// Fetch all credit lines
router.get('/', creditLine.findAll);
// Fetch a specific credit line
router.get('/:id', creditLine.findOne);

// POST
// Create a credit line
router.post('/', creditLine.create);

// PUT
// Update a credit line with username
router.put('/', creditLine.update);

// DELETE
// Delete a credit line with username
router.delete('/:id', creditLine.delete);

module.exports = router;
