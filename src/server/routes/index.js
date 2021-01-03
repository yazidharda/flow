const express = require('express');

const router = express.Router();

const account = require('./account');
const card = require('./card');
const creditLine = require('./creditLine');
const creditLineReq = require('./creditLineReq');
const transfer = require('./transfer');

// Middleware function with no mount path.
// This code is executed for every request to the router
router.use(function (req, res, next) {
	console.log('Time:', Date.now());
	next();
});

router.use('/accounts', account);
router.use('/cards', card);
router.use('/credit-lines', creditLine);
router.use('/credit-line-reqs', creditLineReq);
router.use('/transfers', transfer);

module.exports = router;
