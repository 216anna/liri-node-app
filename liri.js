// import { omdbSearch } from "./omdb";

var omdb = require("./omdb");
var spotify = require("./spotify");
var twitter = require("./twitter");
var nodeArgs = process.argv; 
var searchTerm = "";

//if (nodeArgs.length === 0) {
    //read the file into an array of lines
    //generate a random number between 0 and the length of the lines array
    //get that line
    //split the line on the ","
    //save the first element in the command variable
    //save the second element in the searchTerm variable
//}
var command = nodeArgs[2].toLowerCase();
for (var i = 3; i <nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        searchTerm = searchTerm + "+" + nodeArgs[i];
    }
    else {
        searchTerm += nodeArgs[i];
    }
}

if (command === "movie-this") {
    if (searchTerm === "") {searchTerm = "Mr. Nobody"};
    omdb.search(searchTerm);
}
else if (command === "spotify-this-song"){
    if (searchTerm === "") {searchTerm = "The Sign by Ace of Base"};
    spotify.search(searchTerm);
}
else if (command === "my-tweets") {
    twitter.search(searchTerm);
}
else if (command === "do-what-it-says") {

}
else {

}


