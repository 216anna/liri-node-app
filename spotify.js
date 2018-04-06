//@ts-check
require("dotenv").config();
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var spotifySearch = function (searchTerm) {
spotify.search({ type: 'track', query: searchTerm, limit: 3 }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    
    data.tracks.items.forEach(item => {
        var artist = "";
        item.artists.forEach(element => {
            artist += element.name + ", ";
        });
        console.log("Song: " + item.name);
        console.log("Artist: " + artist);
        console.log("Album: " + item.album.name);
        console.log("Preview: " + item.preview_url);
    })

});
}
exports.search = spotifySearch;