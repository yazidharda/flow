const express = require('express');

var router = express.Router();
const creditLineReq = require('../controllers/creditLineReq.js');

// GET
// Fetch all credit line requests
router.get('/', creditLineReq.findAll);
// Fetch a specific request
router.get('/:id', creditLineReq.findOne);

// POST
// Create a request
router.post('/', creditLineReq.create);

// PUT
// Update a request
router.put('/', creditLineReq.update);

// DELETE
// Delete a request
router.delete('/:id', creditLineReq.delete);

module.exports = router;
