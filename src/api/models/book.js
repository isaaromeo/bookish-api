const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    sinopsis: { type: String, required: true, trim: true },
    pages: { type: Number, required: true },
    categories: [{ type: String, enum: ["fantasy", "adventure","romance", "sci-fi", "thriller", "mystery", "poetry", "dystopian"] }],
    cover: {type: String, trim: true, required: true},
    isbn: {type: String, trim: true, required: true},
    reviews: [{type: mongoose.Types.ObjectId, ref: 'reviews'}]

  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('books', bookSchema, 'books');
module.exports = Book;