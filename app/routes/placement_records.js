module.exports = function (app, db) {
    app.get('/placementRecords', (req, res) => {
        const rp = require('request-promise');
        const cheerio = require('cheerio');
        const options = {
            uri: `http://www.sathyabama.ac.in/sitepagetwo.php?mainref=0&firstref=145&secondref=0`,
            transform: function (body) {
                return cheerio.load(body);
            }
        };
        var yearArr = [];
        var recordsArr = [];
        var finalArray = [];


        rp(options)
            .then(($) => {
                $('.contents').each(function () {
                    $(this).find('h3').each(function() {
                        var h3=$(this).text().split(":")[1].trim();
                        yearArr.push(h3)
                    });
                });
                $('.contents').each(function () {
                    var json = {}
                    $(this).find('table').each(function() {
                        var num = 0;
                        $(this).find('td').each(function() {
                            if(num%2 != 0) {
                                var text = $(this).text();
                                if(num == 1) {
                                    json.registered = text;
                                } else if(num == 3) {
                                    json.eligible = text;
                                } else if(num == 5) {
                                    json.placed = text;
                                } else if(num == 7) {
                                    json.placedPercentage = text;
                                } else if(num == 9) {
                                    json.comapanies = text;
                                } else if(num == 11) {
                                    json.avaragePackege = text;
                                } else {
                                    console.log("Error")
                                }
                            }
                            num++;
                        })
                        recordsArr.push(json)
                    });
                });
                for(var i=0;i<yearArr.length;i++){
                    var data = {}
                    data.id = i;
                    data.year = yearArr[i];
                    data.records = recordsArr[i];
                    finalArray.push(data)
                }
                res.send(finalArray)
            })

            .catch((err) => {
                console.log(err);
            });        
    });
}