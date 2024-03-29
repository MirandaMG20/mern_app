const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId, // Id of the user
            required: true,
            ref: 'User' // Reference to the User model
        },
        text: {
            type: String,
            required: [true, 'Please enter text value']
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Goal', goalSchema);
