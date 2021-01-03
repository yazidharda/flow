module.exports = (sequelize, type) => {
	return sequelize.define('card', {
		number: { type: type.STRING, primaryKey: true },
		holder: { type: type.STRING },
		code: { type: type.INTEGER },
		issueDate: { type: type.DATE },
		type: {
			type: type.ENUM,
			values: ['personal', 'business'],
		},
		active: type.BOOLEAN,
	});
};
