import MoviesListItem from '../MoviesListItem/MoviesListItem';
import {useState, useEffect} from 'react';
import useMovieService from '../../services/MovieServices';

import './moviesList.scss';

const MoviesList = () => {
    // const [movies, setMovies] = useState([]);

    // const {get250Movies, getPopularMovies} = useMovieService();

    // useEffect(() => {
    //     movieRequestPopular();
    // }, [])

    // const onMoviesLoaded = (movies) => {
    //     setMovies(movies);
    // }

    // const movieRequestPopular = () => {
    //     getPopularMovies()
    //     .then(onMoviesLoaded);
    // }

    return (
        <section className="movies">
            <div className="container">
                <MoviesListItem item={{title: 'Most popular'}}/>
            </div>
        </section>
    )
}

export default MoviesList;