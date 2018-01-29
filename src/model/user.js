import mongoose from 'mongoose';

const User = mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        uppercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    }

});
module.exports = { UserModel: mongoose.model('User', User) };