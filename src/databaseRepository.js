class databaseRepository{
    constructor(database){
        this.database = database;
    }

    async allMovies(){
        try{
            const query = "select * from movies";
            const res = await this.database.query(query);
            return res.rows;
        }catch(error){
            return {error};
        }
    }

    async addMovie(newMovie){
        try{
            const query = "insert into movies (name, gender) values ($1, $2) returning *";
            const res = await this.database.query(query, [newMovie.name, newMovie.gender]);
            return res.rows;
        }catch(error){
            return {error};
        }
    }

    async deleteMovie(id){
        try{
            const query = "delete from movies where movieid = $1";
            const res = await this.database.query(query, [id])
            return res.rows;
        }catch(error){
            return {error};
        }
    }
}

module.exports = databaseRepository;