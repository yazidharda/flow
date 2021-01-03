const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// form that we need to get data from
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// GET method route
app.get('/', (req, res) => {
	res.status(200).json({ message: 'connected' });
});

// set port, listen for requests
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
