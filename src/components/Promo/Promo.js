import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import MovieContext from '../../store/MovieСontext';
import useMovieService from '../../services/MovieServices'; 

// React icons
import { CgPlayListAdd, CgPlayListCheck } from "react-icons/cg";

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

import './promo.scss';

// Swiper React styles
import 'swiper/scss'; // Import Swiper styles
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';

const Promo = (props) => {

    const [movies, setMovies] = useState([]);
    // const [btnActive, setBtnActive] = useState(false);
    // const movieContext = useContext(MovieContext);

    const {get250Movies} = useMovieService();

    useEffect(() => {
        moviesRequest();
    }, []);

    const onMoviesLoaded = (movies) => {
        setMovies(movies);
        console.log(movies);
    }

    const moviesRequest = () => {
        get250Movies()
        .then(onMoviesLoaded)
    }

    // const activeToggle = () => {
    //     setBtnActive(() => !btnActive);
    // }

    // const addToWatchList = (amount) => {
    //     movieContext.addMovie({
    //         id: props.id,
    //         title: props.title,
    //         poster: props.posterUrl,
    //         amount: amount
    //     })
    // }

    const renderMovies = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className="promo__img">
                        <img src={item.posterUrl} alt=""/>
                    </div>
                    <div className="container">
                        <div className="promo__wrapper">
                            <h1 className="promo__title">{item.title.length > 22 ? item.title.substring(0, 23) + '...' : item.title}</h1>
                            <h3 className="promo__subtitle">{item.genre} • {item.year} • {item.length}</h3>
                            <div className="promo__country">{item.country}</div>
                            <div className="promo__btns">
                            <Link to={`/movies/${item.id}`}>
                                <button className="promo__btn promo__btn-play btn-reset">
                                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5003 42C33.0704 42 42.4498 32.598 42.4498 21C42.4498 9.40202 33.0704 0 21.5003 0C9.93019 0 0.550781 9.40202 0.550781 21C0.550781 32.598 9.93019 42 21.5003 42Z" fill="#F41B3B"/>
                                        <path d="M29.8023 19.5125L18.4546 12.95C17.9309 12.6 17.2326 12.6 16.7088 12.95C16.1851 13.3 15.8359 13.825 15.8359 14.4375V27.475C15.8359 28.0875 16.1851 28.7 16.7088 28.9625C16.9707 29.1375 17.3199 29.225 17.5817 29.225C17.8436 29.225 18.1928 29.1375 18.4546 28.9625L29.715 22.4C30.2388 22.05 30.5879 21.525 30.5879 20.9125C30.5879 20.3 30.326 19.775 29.8023 19.5125Z" fill="white" fillOpacity="0.87"/>
                                    </svg>
                                    Watch Now
                                </button>
                            </Link>
                                <button className="promo__btn promo__btn-watch btn-reset" onClick={() => {props.onAddMovie(item)}}>
                                    <CgPlayListAdd fontSize="26px"/>
                                    {/* <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="3.02734" width="14.4715" height="1.67378" rx="0.836888" fill="white"/>
                                        <rect x="0.5" y="7.85156" width="14.4715" height="1.67378" rx="0.836888" fill="white"/>
                                        <rect x="0.5" y="12.6758" width="9.64765" height="1.67378" rx="0.836888" fill="white"/>
                                        <rect x="12.3164" y="13.4336" width="8.68296" height="1.67378" rx="0.836888" fill="white"/>
                                        <rect x="17.5234" y="9.96094" width="8.68296" height="1.67378" rx="0.836888" transform="rotate(90 17.5234 9.96094)" fill="white"/>
                                    </svg> */}
                                    Watchlist
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
        return (
            <Swiper className="swiper__height"
                speed={2000}  
                modules={[EffectFade, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                effect="fade"
                >
                {items}
            </Swiper>
        )
    }

    const items = renderMovies(movies);

    return (
        <section className="promo">
            <div className="promo__bg"></div>
            <div className="container promo__container">
                {items}
            </div>
        </section>
    )
}

export default Promo;

