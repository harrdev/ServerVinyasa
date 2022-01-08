const mongoose = require('mongoose')

const asanaSchema = new mongoose.Schema(
	{
		englishName: {
			type: String,
			required: true,
		},
		sanskritName: {
			type: String,
			required: true,
		},
        videoUrl: {
			type: String,
			required: false,
		},
        description: {
			type: String,
			required: true,
		},
        imageUrl: {
			type: String,
			required: true,
		},
        difficulty: {
			type: String,
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

module.exports = mongoose.model('Asana', asanaSchema)