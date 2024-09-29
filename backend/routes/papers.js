const express = require('express');
const { getPapers, addPaper } = require('../controllers/paperController');
const router = express.Router();

router.get('/', getPapers);
router.post('/', addPaper);

module.exports = router;
