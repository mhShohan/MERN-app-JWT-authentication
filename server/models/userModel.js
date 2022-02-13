const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Must provide a name'],
        },
        email: {
            type: String,
            required: [true, 'Must provide an email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Must provide a password'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
