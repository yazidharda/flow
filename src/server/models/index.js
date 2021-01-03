// requiring models and dependencies
const config = require('../config/database.js');
const Sequelize = require('sequelize');

const accountModel = require('./account');
const cardModel = require('./card');
const creditLineModel = require('./creditLine');
const creditLineReqModel = require('./creditLineReq');
const transferModel = require('./transfer');

// Setting up a db connection.
// Instantiate Sequelize and define all details necessary for connecting to the database.
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	// operatorsAliases: false, DeprecationWarning in v5

	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
});

// Next, we instantiate our models by passing a sequelize instance and library itself to required model files.
const Account = accountModel(sequelize, Sequelize);
const Card = cardModel(sequelize, Sequelize);
const CreditLine = creditLineModel(sequelize, Sequelize);
const CreditLineRequest = creditLineReqModel(sequelize, Sequelize);
const Transfer = transferModel(sequelize, Sequelize);

// Setting the database
// promise-based ORM for Node
// Sequelize has been introduced and used in the project to implement all kinds of queries such as DDL, DML, etc.
// Those objects have methods and properties that enable you to avoid writing SQL statements.
// In a nutshell, ORM is a form of abstraction for common SQL operations.
// const db = require('./models')
// sequelize.sync() will create all of the tables in the specified database.
// If you pass {force: true} as a parameter to sync method, it will remove
// tables on every startup and create new ones.
// This is for development
sequelize
	.sync()
	// .sync({ force: true })
	.then(() => {
		console.log('Database & tables created!');
	})
	.catch((err) => {
		console.log('ERROR: ' + err);
	});

// Export models to be able to use them elsewhere in our app.
module.exports = { Account, Card, CreditLine, CreditLineRequest, Transfer };
