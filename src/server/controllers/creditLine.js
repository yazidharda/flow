const { CreditLine } = require('../models');
// const Op = db.Sequelize.Op

// GET
// Fetch all credit lines
exports.findAll = (req, res) => {
	CreditLine.findAll()
		.then((lines) => {
			res.status(200).json(lines);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching credit lines.',
			});
		});
};
// Fetch a specific credit line
exports.findOne = (req, res) => {
	CreditLine.findOne({ where: { id: req.params.id } })
		.then((line) => {
			res.status(200).json(line);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching credit line.',
			});
		});
};

// POST
// Create a credit line
exports.create = (req, res) => {
	const newLine = {
		username: req.body.usr,
		availableCredit: req.body.availableCredit,
		creditDebt: req.body.debt,
		creditLimit: req.body.limit,
		interestAmount: req.body.interest,
	};

	// Save credit line in the database
	CreditLine.create(newLine)
		.then((line) => {
			res.status(200).json(line);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error creating credit line.',
			});
		});
};

// PUT
// Update a credit line with username
exports.update = (req, res) => {
	const newCreditLine = {
		id: req.body.id,
		username: req.body.usr,
		availableCredit: req.body.availableCredit,
		creditDebt: req.body.debt,
		creditLimit: req.body.limit,
		interestAmount: req.body.interest,
	};

	CreditLine.update(newCreditLine, {
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
				message: err.message || 'Error updating credit line.',
			});
		});
};

// DELETE
// Delete a credit line with username
exports.delete = (req, res) => {
	CreditLine.destroy({ where: { id: req.params.id } })
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
				message: err.message || 'Error deleting credit line.',
			});
		});
};
