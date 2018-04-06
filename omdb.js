//wrap whole thing in function
var omdbSearch = function (searchTerm) {
    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";


    // Then create a request to the queryUrl
    var request = require("request");
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            console.log("Title: " + data.Title);
            console.log("Release Year: " + data.Year);
            console.log("IMDB Rating: " + data.imdbRating);
            data.Ratings.forEach(item => {
                if (item.Source === "Rotten Tomatoes") {
                    console.log("Rotten Tomatoes Rating: " + item.Value);
                }
            })
            console.log("Country: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Plot: " + data.Plot);
            console.log("Actors: " + data.Actors);
        }
    });
}
exports.search = omdbSearch;