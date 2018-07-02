const mongoose = require("mongoose");
const Book = require("../models/book");

exports.book_get_all = (req, res, next) => {
    Book.find()
        .select('isbn title author location rating pages summary available book_type')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                books: docs.map(doc => {
                    return {
                        _id: doc._id,
                        isbn: doc.isbn,
                        title: doc.title
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.book_create = (req, res, next) => {
    const book = new Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        location: req.body.location,
        rating: req.body.rating,
        pages: req.body.pages,
        summary: req.body.summary,
        available: req.body.available,
        book_type: req.body.book_type
    });
    book
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created book successfully",
                createdBook: {
                    _id: result._id,
                    isbn: result.isbn,
                    title: result.title
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.book_get = (req, res, next) => {
    Book.findById(req.params.bookId)
        .select('isbn title author location rating pages summary available book_type')
        .exec()
        .then(book => {
            console.log("From database", book);
            if (book) {
                res.status(200).json({
                    book: book,
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided book ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.book_get = (req, res, next) => {
    Book.find(req.params.isbn)
        .select('isbn title author location rating pages summary available book_type')
        .exec()
        .then(book => {
            console.log("From database", book);
            if (book) {
                res.status(200).json({
                    book: book,
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided book ISBN" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.book_get_location = (req, res, next) => {
    Book.find({ location: req.params.location})
        .select('isbn title author location rating pages summary available book_type')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                books: docs.map(doc => {
                    return {
                        _id: doc._id,
                        isbn: doc.isbn,
                        title: doc.title,
                    };
                })
            };
            res.status(200).json(response);
            if (book) {
                res.status(200).json(response);
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided book ISBN" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.book_update = (req, res, next) => {
    const id = req.params.bookId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Book.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Book updated"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.book_delete = (req, res, next) => {
    const id = req.params.bookId;
    Book.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Book deleted",
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
