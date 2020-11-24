const express = require('express');
const router = express.Router();
const abmUtils = require('../utils/ABMUtils');
const appointmentsData = require('../data/APPOINTMENTS_MOCK_DATA.json');

router.get('/getAllAppointments', (req, res) => {
  res.json(appointmentsData);
});

router.get('/getById', (req, res) => {
  abmUtils.getById(req, res, appointmentsData);
});

router.get('/getByAttribute', (req, res) => {
  abmUtils.getByAttribute(req, res, appointmentsData);
});

router.get('/deleteById', (req, res) => {
  abmUtils.deleteById(req, res, appointmentsData, '/../data/APPOINTMENTS_MOCK_DATA.json');
});

module.exports = router;
