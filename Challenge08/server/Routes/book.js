'use strict';

const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const BookController = require('../controllers/book.js');


router.get("/", checkAuth, BookController.book_get_all);
router.post("/", checkAuth, BookController.book_create);
router.get("/:bookId", checkAuth, BookController.book_get);
router.get("/location/:location", checkAuth, BookController.book_get_location);
router.patch("/:bookId", checkAuth, BookController.book_update);
router.delete("/:bookId", checkAuth, BookController.book_delete);

module.exports = router;


