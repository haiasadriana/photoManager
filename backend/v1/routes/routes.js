const express = require('express');
const { getPhoto, createPhoto } = require('../controllers/photos')

const router = express.Router()

router.get('/', getPhoto);
router.post('/upload', createPhoto);

module.exports = router;
