import React from 'react';

const MovieContext = React.createContext({
    movies: [],
    totalAmount: 0,
    addMovie: (movie) => {},
    removeMovie: (movie) => {},
});

export default MovieContext;