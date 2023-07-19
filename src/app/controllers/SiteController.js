// Tạo ra dành cho những page không có tác vụ cụ thể 
// vd: Home, search, contract,...
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    async index(req, res, next) {
        try {
            await Course.find({})
                        .then(courses => {
                            res.render('home', {courses: mutipleMongooseToObject(courses)});
                        })
                        .catch(err => next(err));

        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    };

    search(req, res) {
        // console.log(req.query);
        res.render('search');
    }

    searchDetail(req, res) {
        // console.log(req.query);
        res.send('search');
    }
    
    // app.post('/search', (req, res) => {
    // console.log(req.body);
    //     res.render('search');
    // });
}

module.exports = new SiteController;