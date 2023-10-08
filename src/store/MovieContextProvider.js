import { useReducer } from "react";
import MovieContext from "./MovieСontext";

const defaultMoviesState = {
    movies: [],
    totalAmount: 0
}

const moviesReducer = (state, action) => {
    if (action.type === 'ADD_MOVIE') {
        const updateMovies = state.movies.concat(action.movies);
        const updateTotalAmount = state.totalAmount + action.movies.amount;
        return {
            movies: updateMovies,
            totalAmount: updateTotalAmount
        }
    }
}

const MovieContextProvider = (props) => {
    const [moviesState, dispatchMoviesAction] = useReducer(moviesReducer, defaultMoviesState);

    const addMovieHandler = (movies) => {
        dispatchMoviesAction({
            type: 'ADD_MOVIE',
            movies: movies
        });
    };

    const removeMovieHandler = id => {
        dispatchMoviesAction({
            type: 'REMOVE_MOVIE',
            id: id
        });
    };

    const movieContext = {
        movies: moviesState.movies,
        totalAmount: moviesState.totalAmount,
        addMovie: addMovieHandler,
        removeMovie: removeMovieHandler
    }

    return <MovieContext.Provider value={movieContext}>{props.children}</MovieContext.Provider>  // оборачивает любой компонент который должен иметь доступ к этому контексту
};

export default MovieContextProvider;