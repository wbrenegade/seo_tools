var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest", function(error, response, body) {
    if (error) {
        console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    console.log($.html())


});