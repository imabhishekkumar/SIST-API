module.exports = function (app, db) {
    app.get('/sportNews', (req, res) => {
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
                $('.sports-row').each(function (i, elem) {
                    var id = 0;
                    $(this).find('.sports-rt').each(function (k, elem) {
                        var headline = "";
                        var date = "";
                        headline = $(this).find('p').find('a').text().trim();
                        date = $(this).find('span').text().trim();
                        var json = {
                            "id": id,
                            "headline": headline,
                            "time": date
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