import useHttp from '../../hooks/useHttp';

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';


import img1 from '../../resources/img/img1.jpeg';
import img2 from '../../resources/img/img2.jpeg';
import img3 from '../../resources/img/img3.jpeg';

import './slider.scss';

import 'swiper/scss'; // Import Swiper styles
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';
import { useEffect } from 'react';


const Slider = () => {
    const {loading, request, error, clearError} = useHttp();

    // const API_KEY = "8651d781-07bb-427d-ba6e-1bb41f5c8691";
    const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
    const API_URL_MOVIE_DETAILS = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
    const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=one&page=";

    const getPromoData = async () => {
        const result = await request(API_URL_POPULAR);
        return result.films.map(movie => {
            
        })
    }


    return (
        <Swiper
            speed={2000}  
            navigation={true}
            modules={[Navigation, EffectFade, Autoplay]}
            // spaceBetween={50}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            effect="fade">
            <SwiperSlide>
                <img src={img1}/>
                <div className="wrapper">
                    <div className="promo__text">
                        <h1 className="promo__title">Panther</h1>
                        <h3 className="promo__subtitle">Action, Drama • 2018 • 2h 35m</h3>
                        <div className="promo__descr">
                            The trailer of "Panther" a Bangla movie starring Jeet and Shraddha Das in the lead role. The movie is directed by Anshuman Pratyush.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2}/>
                <div className="promo__text">
                    <h1 className="promo__title">Panther</h1>
                    <h3 className="promo__subtitle">Action, Drama • 2018 • 2h 35m</h3>
                    <div className="promo__descr">
                        The trailer of "Panther" a Bangla movie starring Jeet and Shraddha Das in the lead role. The movie is directed by Anshuman Pratyush.
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3}/>
                <div className="promo__text">
                    <h1 className="promo__title">Panther</h1>
                    <h3 className="promo__subtitle">Action, Drama • 2018 • 2h 35m</h3>
                    <div className="promo__descr">
                        The trailer of "Panther" a Bangla movie starring Jeet and Shraddha Das in the lead role. The movie is directed by Anshuman Pratyush.
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><img src={img1}/></SwiperSlide>
            <SwiperSlide><img src={img2}/></SwiperSlide>
            <SwiperSlide><img src={img3}/></SwiperSlide>
            ...
        </Swiper>
    )
}

export default Slider;