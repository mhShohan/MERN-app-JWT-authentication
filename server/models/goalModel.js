const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'user',
        },
        text: {
            type: String,
            required: [true, 'Must have a goal'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('goal', goalSchema);
