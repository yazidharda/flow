const { CreditLineRequest } = require('../models');
// const Op = db.Sequelize.Op

// GET
// Fetch all credit lines
exports.findAll = (req, res) => {
	CreditLineRequest.findAll()
		.then((reqs) => {
			res.status(200).json(reqs);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching credit lines.',
			});
		});
};
// Fetch a specific credit line request
exports.findOne = (req, res) => {
	CreditLineRequest.findOne({ where: { id: req.params.id } })
		.then((line) => {
			res.status(200).json(line);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching credit line request.',
			});
		});
};

// POST
// Create a credit line request
exports.create = (req, res) => {
	const newLine = {
		username: req.body.usr,
		creditAmount: req.body.amount,
		creditInterest: req.body.interest,
		granted: req.body.granted,
	};

	// Save credit line request in the database
	CreditLineRequest.create(newLine)
		.then((line) => {
			res.status(200).json(line);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error creating credit line request.',
			});
		});
};

// PUT
// Update a credit line request with username
exports.update = (req, res) => {
	const newCreditLine = {
		id: req.body.id,
		username: req.body.usr,
		creditAmount: req.body.amount,
		creditInterest: req.body.interest,
		granted: req.body.granted,
	};

	CreditLineRequest.update(newCreditLine, {
		where: { id: newCreditLine.id },
		returning: true,
	})
		.then((line) => {
			if (!line[0]) {
				return res.status(404).json({
					message: 'CREDIT LINE NOT FOUND',
				});
			}
			return res.status(200).json(line);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error updating credit line request.',
			});
		});
};

// DELETE
// Delete a credit line request with username
exports.delete = (req, res) => {
	CreditLineRequest.destroy({ where: { id: req.params.id } })
		.then((line) => {
			if (!line) {
				return res.status(404).json({
					message: 'CREDIT LINE NOT FOUND',
				});
			}
			return res.status(200);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error deleting credit line request.',
			});
		});
};
