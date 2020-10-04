const latestNews = require('./latest_news.js');
const sportNews = require('./sport_news.js');
const placementRecords = require('./placement_records.js')
module.exports = function(app,db){
    latestNews(app,db);
    sportNews(app,db);
    placementRecords(app,db);
}
