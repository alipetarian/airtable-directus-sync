const express = require('express');

const router = express.Router();
const directusCtrl = require('../controllers/directus.controller');

router.get('/get-categories', directusCtrl.getCategories);

module.exports = router;
