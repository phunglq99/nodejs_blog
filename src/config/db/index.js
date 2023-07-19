const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log("Connect successful!!!!!");
    } catch (err) {
        console.log('Connect error!!!!!');
    }
}

module.exports = { connect };