const mongo = require('../conectaBanco/conectMongo');

const filmeSchema = new mongo.Schema({

    Title: {
        type: String,
        uppercase: true
    },
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: [],
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: String

});

const filmeImdb = mongo.model('FilmeImdb', filmeSchema);

module.exports = filmeImdb;