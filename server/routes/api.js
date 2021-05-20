const sneakerController = require('../controllers/sneakerController');
const express = require('express');
const router = express.Router();
const nikeDunkLow = require('../data/nike-dunk-low.json');
const nikeDunkHigh = require('../data/nike-dunk-high.json');
const jordan1High = require('../data/jordan-1-high.json');

router.get(
  '/',
  // sneakerController.getShoes,
  (req, res) => {
    res.status(200).send(nikeDunkHigh);
  }
);

module.exports = router;
