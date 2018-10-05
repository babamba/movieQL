export let movies = [
    {
        id:0,
        name : "Star Wars - The new one",
        score: 1
    },
    {
        id:1,
        name : "Avengers - The new one",
        score: 8
    },
    {
        id:2,
        name : "The Godfather 1",
        score: 98
    },
    {
        id:3,
        name : "logan",
        score: 44
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));

    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};