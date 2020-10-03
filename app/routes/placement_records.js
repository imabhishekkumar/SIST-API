module.exports = function (app, db) {
    app.get('/p', (req, res) => {
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


        rp(options)
            .then(($) => {
                $('.contents').each(function () {
                    $(this).find('h3').each(function() {
                        var h3=$(this).text().split(":")[1].trim();
                        yearArr.push(h3)
                    });
                    console.log(yearArr);
                });
                $('.contents').each(function () {
                    $(this).find('table').each(function() {
                        var num=0;
                        $(this).find('td').each(function() {
                            if(num%2!=0){
                                var text=$(this).text();
                                console.log(text,num)
                                // var json ={

                                // }
                            }
                            num++;
                        })
                    });
                });
                res.send(yearArr)
            })

            // .then(($) => {
            //         // var id = 0;
            //         // $(this).find('.sports-row1-rt').each(function (k, elem) {
            //         //     var headline = "";
            //         //     var date = "";
            //         //     headline = $(this).find('p').find('a').text().trim();
            //         //     date = $(this).find('span').text().trim();
            //         //     var json = {
            //         //         "id": id,
            //         //         "headline": headline,
            //         //         "date": date
            //         //     }
            //         //     arr.push(json)
            //         //     id++;
            //         // });
            // })

            
            .catch((err) => {
                console.log(err);
            });        
    });
}