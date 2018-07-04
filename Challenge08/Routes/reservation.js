'use strict';

const express = require("express");
const router = express.Router();
const ReservationController = require('../controllers/reservation.js');


router.get("/", ReservationController.reservation_get_all);

router.post("/", ReservationController.reservation_create);

router.get("/:reservationId", ReservationController.reservation_get);

router.delete("/:reservationId", ReservationController.reservation_delete);

module.exports = router;
