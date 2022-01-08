const mongoose = require('mongoose')

const userPracticeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
	    routine: {
			type: Array,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('userPractice', userPracticeSchema)