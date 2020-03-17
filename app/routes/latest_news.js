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
                    $(this).find('.sports-row1-rt').each(function (k, elem) {
                        var headline = "";
                        var date = "";
                        headline = $(this).find('p').find('a').text().trim();
                        date = $(this).find('span').text().trim();
                        var json = {
                            "headline": headline,
                            "date": date
                        }
                        arr.push(json)
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