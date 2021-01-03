module.exports = (sequelize, type) => {
	return sequelize.define('creditLine', {
		id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
		username: { type: type.STRING },
		availableCredit: { type: type.DOUBLE },
		creditDebt: { type: type.DOUBLE },
		creditLimit: { type: type.DOUBLE },
		interestAmount: { type: type.DOUBLE },
	});
};
