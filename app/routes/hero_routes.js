module.exports = function(app,db){
    app.get('/hero/:id', (req, res) => {
        console.log(req.body);
        var fs = require('../../data.json');
        res.send(fs[req.params.id])
    });
    app.get('/heros', (req, res) => {
        console.log(req.body);
        var fs = require('../../data.json');
        res.send(fs)
    });



}
