const coursesRoute = require('./courses');
const newsRoute = require('./news');
const siteRoute = require('./site');

function route(app) {
    app.use('/courses', coursesRoute);
    app.use('/news', newsRoute);
    app.use('/', siteRoute);

}

module.exports = route;