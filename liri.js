// import { omdbSearch } from "./omdb";

var omdb = require("./omdb");
var spotify = require("./spotify");
var twitter = require("./twitter");
var nodeArgs = process.argv;
var searchTerm = "";

var command = nodeArgs[2].toLowerCase();
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        searchTerm = searchTerm + "+" + nodeArgs[i];
    }
    else {
        searchTerm += nodeArgs[i];
    }
}

if (command === "movie-this") {
    if (searchTerm === "") { searchTerm = "Mr. Nobody" };
    omdb.search(searchTerm);
}
else if (command === "spotify-this-song") {
    if (searchTerm === "") { searchTerm = "The Sign by Ace of Base" };
    spotify.search(searchTerm);
}
else if (command === "my-tweets") {
    twitter.search(searchTerm);
}
else if (command === "do-what-it-says") {
    var fs = require('fs');
    fs.readFile("random.txt", "utf-8", function (err, data) {
        if (err) {
            return console.error(err);
        }
        var output = data.split(',');
        var searchTerm = output[1];
        spotify.search(searchTerm);
    })
    //read the file into an array of lines
    //generate a random number between 0 and the length of the lines array
    //get that line
    //split the line on the ","
    //save the first element in the command variable
    //save the second element in the searchTerm variable
    //}
}
else {
    console.log("Enter a command: movie-this, spotify-this-song, my-tweets, or do-what-it-says");
}


