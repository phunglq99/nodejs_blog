// Tạo ra dành cho những page không có tác vụ cụ thể 
// vd: Home, search, contract,...
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:id
    show(req, res, next) {
        // Dùng model Course để check lên database xem có properties cùng dữ liệu hay không. Nếu có sẽ trả về 1 promise
        Course.findOne({ slug : req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next);
    };

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        // res.json(req.body);
        const course = new Course(req.body);
        course.save();
    }
}

module.exports = new CourseController;