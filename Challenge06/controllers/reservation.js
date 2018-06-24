const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Reservation = require("../models/reservation");
const User = require("../models/user");
const Book = require("../models/book");

exports.reservation_get_all = (req, res, next) => {
    Reservation.find()
        .select('user book lend_date return_Date')
        .populate('user', 'book')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                reservation: docs.map(doc => {
                    return {
                        _id: doc._id,
                        user: doc.user,
                        book: doc.book,
                        lend_date: doc.lend_date,
                        return_date: doc.return_date,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/reservation/" + doc._id
                        }
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.reservation_create = (req, res, next) => {
    Book.findById(req.body.book)
        .then(book => {
            if (!book) {
                return res.status(404).json({
                    message: "Book not found"
                });
            }
            const reservation = new Reservation({
                user: req.body.user,
                book: req.body.book,
                lend_date: Date(),
                return_date:""
            });
            return reservation.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Reservation stored",
                createdReservation: {
                    _id: result._id,
                    user: result.user,
                    book: result.book,
                    lend_date: result.lend_date,
                    return_date: result.return_date,
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

exports.reservation_get = (req, res, next) => {
    Reservation.findById(req.params.reservationId)
        .select('user book lend_date return_Date')
        .exec()
        .then(reservation => {
            if (!reservation) {
                return res.status(404).json({
                    message: "Reservation not found"
                });
            }
            res.status(200).json({
                reservation: reservation
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};


exports.reservation_delete = (req, res, next) => {
    Reservation.remove({ _id: req.params.reservationId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Reservation deleted",
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
