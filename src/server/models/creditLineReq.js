module.exports = (sequelize, type) => {
	return sequelize.define('creditLineReq', {
		id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
		username: { type: type.STRING },
		creditAmount: { type: type.DOUBLE },
		creditInterest: { type: type.DOUBLE },
		granted: { type: type.BOOLEAN },
	});
};
