const { Card } = require('../models');
// const Op = db.Sequelize.Op

// GET
// Fetch all cards
exports.findAll = (req, res) => {
	Card.findAll()
		.then((cards) => {
			res.status(200).json(cards);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching all cards.',
			});
		});
};
// Fetch a specific card
exports.findOne = (req, res) => {
	Card.findOne({ where: { number: req.params.number } })
		.then((card) => {
			res.status(200).json(card);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching card.',
			});
		});
};

// POST
// Create an card
exports.create = (req, res) => {
	const newCard = {
		number: req.body.nb,
		holder: req.body.holder,
		code: req.body.code,
		issueDate: req.body.date,
		type: req.body.type,
	};

	// Save card in the database
	Card.create(newCard)
		.then((card) => {
			res.status(200).json(card);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error creating card.',
			});
		});
};

// PUT
// Enable the card holder to block and unblock
exports.changeStatus = (req, res) => {
	// Enable the user to block or unblock a card
	Card.findOne({ where: { number: req.body.nb } })
		.then((card) => {
			Card.update(
				{ active: !card.active },
				{
					where: { number: card.number },
					returning: true,
				}
			).then((updatedCard) => {
				res.status(200).json(updatedCard);
			});
		})
		.cautch((err) => {
			res.status(500).json({
				message: err.message || 'Error fetching card.',
			});
		});
};

// DELETE
// Delete an card with number
exports.delete = (req, res) => {
	Card.destroy({ where: { number: req.params.usr } })
		.then((card) => {
			if (!card) {
				return res.status(404).json({
					message: 'CARD NOT FOUND',
				});
			}
			return res.status(200);
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || 'Error deleting card.',
			});
		});
};
