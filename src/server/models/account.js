// As JavaScript originally had no concept of modules,
// a variety of competing formats have emerged over time.

// The CommonJS (CJS) format is used in Node.js and uses
// require and module.exports to define dependencies and modules.
// The npm ecosystem is built upon this format.

// https://sequelize.org/v3/docs/models-definition/#:~:text=To%20define%20mappings%20between%20a,was%20updated%20the%20last%20time.
// define mappings between a model and a table (sequelize.define).
// type will then automatically add the attributes createdAt and updatedAt to it.

// https://www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
// We need to pass two things to our model files
module.exports = (sequelize, type) => {
	return sequelize.define('account', {
		username: { type: type.STRING, primaryKey: true },
		password: { type: type.STRING },
		name: { type: type.STRING },
		balance: { type: type.DECIMAL },
		type: {
			type: type.ENUM,
			values: ['personal', 'business'],
		},
	}); // We are exporting a function that will return a model instance.
};
