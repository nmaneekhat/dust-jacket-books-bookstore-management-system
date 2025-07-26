const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    publisher: String,
    year: Number,
    genre: String,
    price: Number,
    inStock: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);