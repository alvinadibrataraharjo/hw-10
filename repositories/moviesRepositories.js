var conn = require('../config/connection.js');


class Movies {
    constructor(id, title, genres, year, photo){
        this.id = +id;
        this.title = title;
        this.genres = genres;
        this.year = year;
        this.photo = photo;
    }

    static showAllMovies(callback){
        let query = `SELECT * FROM movies;`;

        conn.query(query, (err, result) => {
            if(err){
                callback(err, null);
            }
            else{
                callback(null, result);
            }
        });
        
    }

    static showMovieById(id, callback){
        let query = `SELECT * FROM movies where id = $1;`;

        conn.query(query, [id], (err, result) => {
            if(err){
                callback(err, null);
            }
            else{
                callback(null, result);
            }
        });
        
    }

    
    static delete(id, callback){
        let query = `delete from movies where id=$1`

        conn.query(query, [id], (err, result) => {
            if(err){
                callback(err, null);
            }
            else{
                callback(null, result);
            }
        });
    }

    static post(movie, callback){
        let query = `
                INSERT INTO movies ("title", "genres", "year", "photo") VALUES ($1, $2, $3, $4);
            `;

            let arrData = [movie.title, movie.genres, movie.year, movie.photo];

            conn.query(query, arrData, (err, result) => {
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`${movie.title} sudah masuk datanya..`);
                    callback(null, null);
                }
            });
    }

    static edit(id, movie, callback){
        let query = `
            UPDATE "movies" SET "title" = $1, "genres" = $2, "year" = $3, "photo" = $4 WHERE id = $5;
            `;

            let arrData = [movie.title, movie.genres, movie.year, movie.photo, id];

            console.log(arrData)

            conn.query(query, arrData, (err, result) => {
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`sudah di update datanya..`);
                    callback(null, null);
                }
            });
    }

}

module.exports = Movies;