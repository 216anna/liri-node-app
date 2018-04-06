require("dotenv").config();
var keys = require("./keys");
var twitter = require("twitter");
var client = new twitter(keys.twitter);


var twitterSearch = function (searhTerm) {
    client.get('search/tweets', { q: searhTerm, count: 20 }, function (error, data, response) {
        if (error) {
            console.error(error);
        }
        data.statuses.forEach(item => {
            console.log(item.created_at + ": " + item.text);
        })
    })
}

exports.search = twitterSearch;