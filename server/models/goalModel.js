const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Must have a goal'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('goal', goalSchema);
