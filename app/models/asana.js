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
        // ***** MAKE SURE TO CHANGE THIS TO TRUE!!!! **** //
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: false,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Asana', asanaSchema)