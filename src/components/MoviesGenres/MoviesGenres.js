import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import useMovieService from '../../services/MovieServices';
import Spinner from '../Spinner/Spinner';

import {FaTheaterMasks, FaGhost, FaBasketballBall, FaDragon, FaMusic} from 'react-icons/fa';
import './moviesGenres.scss';

const MoviesGenres = () => {
    const [movies, setMovies] = useState([]);
    const [moviesGenre, setMoviesGenre] = useState('');

    const {loading, error, getMovieGenres} = useMovieService();

    const buttonsData = [
        {genre: '2', label: 'drama', icon: <FaTheaterMasks fontSize={'140px'} color="#fff" className="genres-icons"/>},
        {genre: '17', label: 'horror', icon: <FaGhost fontSize={'140px'} color="#fff" className="genres-icons"/>},
        {genre: '12', label: 'fantasy', icon: <FaDragon fontSize={'140px'} color="#fff" className="genres-icons"/>},
        {genre: '21', label: 'sport', icon: <FaBasketballBall fontSize={'140px'} color="#fff" className="genres-icons"/>},
        {genre: '16', label: 'music', icon: <FaMusic fontSize={'140px'} color="#fff" className="genres-icons"/>}
    ]

    useEffect(() => {
        moviesRequest('2');
    }, []);


    const onMoviesLoaded = (movies) => {
        setMovies(movies);
    }

    const moviesRequest = (genre) => {
        setMoviesGenre(genre);
        getMovieGenres(genre)
        .then(onMoviesLoaded)
    }

    const buttons = buttonsData.map(({genre, label, icon}) => {
        const active = moviesGenre === genre; 
        const clazz = active ? 'btn-reset movies-genres__btn movies-genres__btn-active' : 'btn-reset movies-genres__btn';

        return (
            <button type="button"
                className={clazz}
                key={genre}
                onClick={() => moviesRequest(genre)}
            >
                {icon}
                <span className="movies-genres__name">{label}</span> 
            </button>
        )
    })

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <li className="movies-genres__list-item" key={i}>
                    <div className="movie">
                        <Link to={`/movies/${item.id}`}>
                            <div className="movie__cover movie__cover-dark">
                                <img src={item.posterUrl} className="movie__img" alt="movie-poster"/>
                            </div>
                        </Link>
                        <div className="movie__info">
                            <h4 className="movie__title">{item.title.length > 18 ? item.title.substring(0, 19) + '...' : item.title}</h4>
                            <div className="movie__genre">{item.genre}, {item.year}</div>
                            <div className="movie__average">{item.rating}</div>
                        </div>
                    </div>
                </li>
            )
        })
        return (
            <ul className="movies-genres__list list-reset">
                {items}
            </ul>
        )
    }

    const items = renderItems(movies);
    const spinner = loading ? <Spinner/> : null;

    return (
        <section className="movies-genres">
            <div className="container">
                <h2 className="movies-genres__title">Movies by genres:</h2>
                <div className="movies-genres__divider"></div>
                <div className="movies-genres__btns">
                    {buttons}
                    {/* <button className="btn-reset movies-genres__btn" onClick={moviesRequest}>
                        <FaTheaterMasks fontSize={'140px'} color="#fff" className="genres-icons"/>
                        <span className="movies-genres__name">Comedy</span> 
                    </button>
                    <button className="btn-reset movies-genres__btn">
                        <FaGhost fontSize={'140px'} color="#fff" className="genres-icons"/>
                        <span className="movies-genres__name">Horror</span> 
                    </button>
                    <button className="btn-reset movies-genres__btn">
                        <FaBasketballBall fontSize={'140px'} color="#fff" className="genres-icons"/>
                        <span className="movies-genres__name">Sport</span> 
                    </button>
                    <button className="btn-reset movies-genres__btn">
                        <FaDragon fontSize={'140px'} color="#fff" className="genres-icons"/>
                        <span className="movies-genres__name">Fantasy</span> 
                    </button>
                    <button className="btn-reset movies-genres__btn">
                        <FaEvernote fontSize={'140px'} color="#fff" className="genres-icons"/>
                        <span className="movies-genres__name">Animals</span> 
                    </button> */}
                </div>
                <div className="movies-genres__divider"></div>
                {items}
                {spinner}
            </div>
            
        </section>
    )
}

export default MoviesGenres;