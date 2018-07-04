'use strict';

const express = require("express");
const router = express.Router();
const BookController = require('../controllers/book.js');


router.get("/", BookController.book_get_all);

router.post("/", BookController.book_create);

router.get("/:bookId", BookController.book_get);

router.get("/location/:location", BookController.book_get_location);

router.patch("/:bookId", BookController.book_update);

router.delete("/:bookId", BookController.book_delete);

module.exports = router;


