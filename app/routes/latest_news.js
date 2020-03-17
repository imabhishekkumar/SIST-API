module.exports = function (app, db) {
    app.get('/latestNews', (req, res) => {
        const rp = require('request-promise');
        const cheerio = require('cheerio');
        const options = {
            uri: `https://www.sathyabama.ac.in`,
            transform: function (body) {
                return cheerio.load(body);
            }
        };
        var arr = [];


        rp(options)
            .then(($) => {
                $('.latest_news').each(function (i, elem) {
                    var id = 0;
                    $(this).find('.sports-row1-rt').each(function (k, elem) {
                        var headline = "";
                        var date = "";
                        headline = $(this).find('p').find('a').text().trim();
                        date = $(this).find('span').text().trim();
                        var json = {
                            "id": id,
                            "headline": headline,
                            "date": date
                        }
                        arr.push(json)
                        id++;
                    });
                    res.send(arr);
                    console.log(arr);
                });
            })
            .catch((err) => {
                console.log(err);
            });

    });
}