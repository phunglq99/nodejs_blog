const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/search/:slug', siteController.searchDetail);
router.use('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;