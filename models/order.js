const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	orderNumber: {
		type: String,
		required: true,
	},
	dateCreated: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	teamCode: {
		type: String,
		required: true,
	},
	dateClosed: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model('Order', orderSchema);
