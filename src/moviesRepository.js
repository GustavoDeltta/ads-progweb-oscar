class moviesRepository{
    
    constructor(){
        this.movies = [];
    }
    
    allMovies(){
        return this.movies;
    }

    addMovie(movie){
        this.movies.push(movie);
    }

    deleteMovie(id){
        if (this.movies[id]) {
            let valueDeleted = this.movies[id];
            this.movies.splice(id, 1);
            return valueDeleted;
        }else{
            return { error: "Indefined position" };
        }
    }
}

module.exports = moviesRepository;