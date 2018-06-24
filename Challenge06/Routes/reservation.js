'use strict'

const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ReservationController = require('../controllers/reservation.js');


router.get("/", checkAuth, ReservationController.reservation_get_all);

router.post("/", checkAuth, ReservationController.reservation_create);

router.get("/:reservationId", checkAuth, ReservationController.reservation_get);

router.delete("/:reservationId", checkAuth, ReservationController.reservation_delete);

module.exports = router;
