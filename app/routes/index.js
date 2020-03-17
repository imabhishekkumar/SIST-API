const noteRoutes = require('./hero_routes');
module.exports = function(app,db){
    noteRoutes(app,db);
}
