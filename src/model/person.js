import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Person = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: false,
        uppercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        uppercase: true
    },
    birthDate: {
        type: Date,
        required: false,
        trim: true
    },
    registerDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    role: {
        type: String,
        required: false,
        trim: false,
        uppercase: true
    },
    sector: {
        type: String,
        required: false,
        trim: false,
        uppercase: true
    },
    phoneNumber: {
        type: Number,
        required: false,
        trim: true
    },
    address: {
        type: String,
        required: false,
        trim: false,
        uppercase: true
    },
    cpf: {
        type: Number,
        required: false,
        trim: false
    },

});
module.exports =  { PersonModel: mongoose.model('Person', Person) };