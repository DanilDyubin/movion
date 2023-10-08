import {useState, useEffect} from 'react';
import useMovieService from '../../services/MovieServices';
import {Link} from 'react-router-dom';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 
import {Navigation} from 'swiper/modules';

import './moviesListItem.scss';

// Swiper React styles
import 'swiper/scss'; // Import Swiper styles
import 'swiper/scss/navigation';


const MoviesListItem = (props) => {

    const [movies, setMovies] = useState([]);
    const {get250Movies} = useMovieService();

    useEffect(() => {
        onMoviesRequest();
    },[]);

    const onMoviesLoaded = (movies) => {
        setMovies(movies);
    }

    const onMoviesRequest = () => {
        get250Movies()
        .then(onMoviesLoaded)
    }

    const renderMovies = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <SwiperSlide key={i} className="swiper-slide-promo">
                    <Link to={`/movies/${item.id}`}>
                        <div className="movie">
                            <div className="movie__cover movie__cover-dark">
                                <img src={item.posterUrlPreview} className="movie__img" alt="movie-poster"/>
                            </div>
                            <div className="movie__info">
                                <div className="movie__genre">{item.genre}, {item.year}</div>
                                <div className="movie__average">{item.rating}</div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            )
        })
        
        return (
            <Swiper className="swiper-height"
                slidesPerView={5}
                spaceBetween={30}
                navigation={{
                        nextEl: '.movies__btn-next',
                        prevEl: '.movies__btn-prev'
                }} 
                modules={[Navigation]}
                >
                {items}
            </Swiper>
        )
    }

    const items = renderMovies(movies);

    return (
        <section className="movies-list-item">
                <h2 className="title movies__title">{props.item.title}</h2>
                <div className="movies__btns">
                    <div className="movies__btn movies__btn-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                    </div>
                    <div className="movies__btn movies__btn-next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                    </div>
                </div>
                <div className="movies-list">
                    {items}
                </div>
        </section>
    )
}

export default MoviesListItem;
