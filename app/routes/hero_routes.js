module.exports = function(app,db){
    app.post('/hero/:id', (req, res) => {
        console.log(req.body);
        var fs = require('../../data.json');
        res.send(fs[req.params.id])
    });
    app.post('/heros', (req, res) => {
        console.log(req.body);
        var fs = require('../../data.json');
        res.send(fs)
    });
}
