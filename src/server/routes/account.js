const express = require('express');

const router = express.Router();
const account = require('../controllers/account.js');

// GET
// Fetch all accounts
router.get('/', account.findAll);
// Fetch a specific account
router.get('/:usr', account.findOne);

// POST
// Create an account
router.post('/', account.create);

// PUT
// Update an account with username
router.put('/', account.update);

// DELETE
// Delete an account with username
router.delete('/:usr', account.delete);

module.exports = router;
