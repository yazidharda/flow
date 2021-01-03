module.exports = (sequelize, type) => {
	return sequelize.define('transfer', {
		id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
		sender: { type: type.STRING },
		recipient: { type: type.STRING },
		amount: { type: type.BIGINT },
	});
};
