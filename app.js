//Imports
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const { auth } = require('express-openid-connect');

//Authentication config
const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.SECRET_KEY,
	baseURL: process.env.BASE_URL,
	clientID: process.env.CLIENT_ID,
	issuerBaseURL: process.env.ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//Mongoose setup
main().catch((err) => console.log(err));

async function main() {
	//Make sure that where I wrote "orders" you write whatever you want the name of the database you are storing to be.
	const connString = process.env.CONNECTION_STRING;
	await mongoose.connect(connString);
}

//Routing for main HTML page
app.use(express.json());

app.route('/').get((req, res) => {
	/* Where it says "/static/index.html", make sure it points to where
       you put the html file generated by ChatGPT*/
	if (req.oidc.isAuthenticated())
		res.sendFile(path.join(__dirname + '/static/index.html'));
	else
		res.send(
			"You are not logged in. Go <a href='/login'>here</a> to login or signup."
		);
});

app.route('/docs').get((req, res) => {
	res.sendFile(path.join(__dirname + '/static/docs.html'));
});

//Routing for Orders API
const ordersRouter = require('./routes/orders.js');
app.use('/orders', ordersRouter);

//App setup
app.listen(port, (error) => {
	if (error) {
		return console.log(`Server failed to start: ${error}.`);
	}
	console.log(`Server now accessible at http://localhost:${port}`);
});
