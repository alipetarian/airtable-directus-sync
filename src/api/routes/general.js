const express = require('express');

const router = express.Router();
const generalCtrl = require('../controllers/general.controller');

router.get('/test-hook', generalCtrl.testHook);
router.get('/bemob-postback', generalCtrl.bemobPostback);

module.exports = router;
