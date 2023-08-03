const dbo = require("../db/conn");
var express = require("express");
const mongodb = require("mongodb");

//Will need to add other middlewares soon enough
const { getSessionUser } = require("./middlewares/session");
const eventController = require('../controllers/eventController');

const router = express.Router();

// Helper function to check if a string is a valid date
function isValidDate(dateString) {
  const dateObject = new Date(dateString);
  return !isNaN(dateObject);
}

router.post('/event/create', eventController.createEvent);

router.get('/events', eventController.getEvents);

module.exports = router;
