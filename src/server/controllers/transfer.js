const { Transfer } = require('../models');
// const Op = db.Sequelize.Op

// GET
// Fetch all transfers
exports.findAll = (req, res) => {
	Transfer.findAll()
		.then((transfers) => {
			res.status(200).json(transfers);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching transfers.',
			});
		});
};
// Fetch a specific transfer
exports.findOne = (req, res) => {
	Transfer.findOne({ where: { id: req.params.id } })
		.then((transfer) => {
			res.status(200).json(transfer);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching transfer.',
			});
		});
};

// POST
// Create a transfer
exports.create = (req, res) => {
	const newTransfer = {
		sender: req.body.usrSender,
		recipient: req.body.usrRecipient,
		amount: req.body.amount,
	};

	// Save transfer in the database
	Transfer.create(newTransfer)
		.then((transfer) => {
			res.status(200).json(transfer);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error creating transfer.',
			});
		});
};

// PUT
// Update a transfer with username
exports.update = (req, res) => {
	const newTransfer = {
		id: req.body.id,
		sender: req.body.usrSender,
		recipient: req.body.usrRecipient,
		amount: req.body.amount,
	};

	Transfer.update(newTransfer, {
		where: { id: newTransfer.id },
		returning: true,
	})
		.then((transfer) => {
			if (!transfer[0]) {
				return res.status(404).json({
					message: 'TRANSFER NOT FOUND',
				});
			}

			return res.status(200).json(transfer);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error updating transfer.',
			});
		});
};

// DELETE
// Delete a transfer with username
exports.delete = (req, res) => {
	Transfer.destroy({ where: { id: req.params.id } })
		.then((transfer) => {
			if (!transfer) {
				return res.status(404).json({
					message: 'TRANSFER NOT FOUND',
				});
			}
			return res.status(200);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error deleting transfer.',
			});
		});
};
