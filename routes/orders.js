//Imports
const express = require('express');
const router = express.Router();
const Order = require('../models/order.js');

//Route for getting all documents
router.get('/', async (req, res) => {
	try {
		//This gets all the change orders and send them back in JSON format
		const orders = await Order.find();
		res.json(orders);
	} catch (error) {
		//This means that there is an erorr, and we must send back an error message
		res.status(500).json({ message: error });
	}
});

//Route for creating a document
router.post('/', async (req, res) => {
	//Creating a new change order object out of data received in the post request
	const order = new Order({
		orderNumber: req.body.orderNumber,
		dateCreated: req.body.dateCreated,
		description: req.body.description,
		teamCode: req.body.teamCode,
		dateClosed: req.body.dateClosed,
	});
	//We will now try inserting the new order into the database
	try {
		const newOrder = await order.save();
		res.status(201).json(newOrder);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
