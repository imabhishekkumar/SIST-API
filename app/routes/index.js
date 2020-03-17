const latestNews = require('./latest_news.js');
module.exports = function(app,db){
    latestNews(app,db);
}
