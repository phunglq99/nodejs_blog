// Tạo ra dành cho những page không có tác vụ cụ thể 
// vd: Home, search, contract,...
class SiteController {

    index(req, res) {
        res.render('home');
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