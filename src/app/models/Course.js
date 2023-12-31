const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minlength: 4, maxlength:255, required: true},
    description: { type: String, maxlength:600 },
    image: { type: String, maxlength:255 },
    videoId: { type: String, minlength: 4, maxlength:255 },
    level: { type: String, minlength: 4, maxlength:255 },
    createdAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course);
