//var bodyParser = require('body-parser');

module.exports = function(app, people) {    

    app.get('/api/friends', function(req, res) {
        res.json(people);
    });
}