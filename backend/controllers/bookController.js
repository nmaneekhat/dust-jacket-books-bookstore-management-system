const Book = require('../models/Book');

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const saved = await book.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Edit an existing book
exports.editBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Book not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};