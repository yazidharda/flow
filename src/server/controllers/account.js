const { Account } = require('../models');
// const Op = db.Sequelize.Op

// GET
// Fetch all accounts
exports.findAll = (req, res) => {
	Account.findAll()
		.then((allAcc) => {
			res.status(200).json(allAcc);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching all accounts.',
			});
		});
};
// Fetch a specific account
exports.findOne = (req, res) => {
	Account.findOne({ where: { username: req.params.usr } })
		.then((acc) => {
			res.status(200).json(acc);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching account.',
			});
		});
};

// POST
// Create an account
exports.create = (req, res) => {
	const newAcc = {
		username: req.body.usr,
		password: req.body.pass,
		name: req.body.name,
		balance: req.body.balance,
	};

	// Save account in the database
	Account.create(newAcc)
		.then((acc) => {
			res.status(200).json(acc);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error creating account.',
			});
		});
};

// PUT
// Update an account with username
exports.update = (req, res) => {
	const newAcc = {
		username: req.body.usr,
		password: req.body.pass,
		name: req.body.name,
		balance: req.body.balance,
	};

	Account.update(newAcc, {
		where: { username: newAcc.username },
		returning: true,
	})
		.then((acc) => {
			if (!acc[0]) {
				return res.status(404).json({
					message: 'ACCOUNT NOT FOUND',
				});
			}

			res.status(200).json(acc);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error updating account.',
			});
		});
};

// DELETE
// Delete an account with username
exports.delete = (req, res) => {
	Account.destroy({ where: { username: req.params.usr } })
		.then((acc) => {
			if (!acc) {
				return res.status(404).json({
					message: 'ACCOUNT NOT FOUND',
				});
			}
			res.status(200);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error deleting account.',
			});
		});
};
