const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

// [GET]/course?id=:id: use req.query.id
// router.get('/', courseController.show);

// [GET]/course/id: use req.params
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;