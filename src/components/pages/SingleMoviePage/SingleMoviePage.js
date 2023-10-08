import {useState, useEffect} from 'react';
import useMovieService from '../../../services/MovieServices';
import {useParams} from 'react-router-dom';
import StarRating from '../../UI/StarRating/StarRating';
import { CgPlayListAdd } from "react-icons/cg";


import './singleMoviePage.scss';

const SingleMoviePage = (props) => {
    const {filmId} = useParams();
    console.log(filmId);
    const [movie, setMovie] = useState({});

    const {getMovie} = useMovieService();

    useEffect(() => {
        movieRequest();
    }, [filmId]);

    const movieRequest = () => {
        getMovie(filmId)
        .then(onMovieLoaded)
    }

    const onMovieLoaded = (movie) => {
        setMovie(movie);
        console.log(movie)
    }

    return (
        <>
        <section className="single-movie">
            <div className="container">
                <div className="single-movie__wrapper">
                    <div className="single-movie__coverbg">
                        <img src={movie.posterUrl} alt="" className="single-movie__coverbg-img"/>
                    </div>
                    <div className="single-movie__content">

                        <img src={movie.posterUrlPreview} alt="" className="single-movie__cover"/>

                        <div className="single-movie__text">
                            <h2 className="single-movie__title">{movie.title} ({movie.year})</h2>
                            <p className="single-movie__slogan">{movie.slogan}</p>
                            <h3 className="single-movie__subtitle">О фильме</h3>
                            <div className="table">
                                <div className="table__wrapper">
                                    <div className="table__left">Год</div>
                                    <div className="table__value">{movie.year}</div>
                                </div>
                                <div className="table__wrapper">
                                    <div className="table__left">Жанр</div>
                                    <div className="table__value">{movie.genre}</div>
                                </div>
                                <div className="table__wrapper">
                                    <div className="table__left">Страна</div>
                                    <div className="table__value">{movie.country}</div>
                                </div>
                                <div className="table__wrapper">
                                    <div className="table__left">Время</div>
                                    <div className="table__value">{movie.length} мин.</div>
                                </div>
                            </div>
                            <div className="single-movie__rating">
                                <div className="single-movie__rating-text">Рейтинг:</div>
                                <div className="single-movie__rating-value">{movie.rating}</div>
                            </div>
                            <button className="single-movie__btn" onClick={() => {props.onAddMovie(movie)}}>
                                <CgPlayListAdd fontSize="22px"/>
                                В избранные
                            </button>
                        </div>
                    </div>
                    <div className="single-movie__divider"></div>
                    <div className="single-movie__footer">
                        <div className="single-movie__descr">{movie.description}</div>
                        <div className="single-movie__stars">
                            <div className="single-movie__footer-title">Поставьте оценку</div>
                            <div className="single-movie__footer-text">Оценки улучшают ваши рекомендации</div>
                            <StarRating style={{fontSize: '14px', fontWeight: '300', paddingTop: '10px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default SingleMoviePage;