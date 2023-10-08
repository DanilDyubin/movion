// import {useContext} from 'react';
// import MovieContext from '../../store/MovieСontext';
// import {useState} from 'react';
// import moviesData from '../../movies-data.json'
import {Link} from 'react-router-dom';
import StarRating from "../UI/StarRating/StarRating";
import { FaTrashRestore, FaRegSadCry } from "react-icons/fa";

import './watchList.scss';

const WatchList = (props) => {
    // const [data] = useState(moviesData);

    // const onRemove = f => f;

    const renderItems = (arr) => {
        if (!arr.length) return <h2 className="watch-list__default"> There is no movies now <FaRegSadCry fontSize={'40px'} className="watch-list__default-icon"/> Please add movie to watchlist</h2>
        const items =  arr.map((item, i) => {

            return (
                <li className="watch-list__list-item" key={i}>
                    <div className="movie">
                        <Link to={`/movies/${item.id}`}>
                            <div className="movie__cover movie__cover-dark">
                                <img src={item.posterUrl} className="movie__img" alt="movie-poster"/>
                            </div>
                        </Link>
                        <button onClick={() => {props.onRemoveMovie(item.id)}} className="movie__btn">
                            <FaTrashRestore className="movie__icon" color="var(--color-white)" fontSize="22px"/>
                        </button>
                        <div className="movie__info">
                            <h4 className="movie__title">{item.title.length > 16 ? item.title.substring(0, 17) + '...' : item.title}</h4>
                            <div className="movie__genre">{item.genre}, {item.year}</div>
                            <div className="movie__average">{item.rating}</div>
                        </div>
                    </div>
                </li>
            )
        })
        return (
            <ul className="watch-list__list list-reset">
                {items}
            </ul>
        )
    }

    const items = renderItems(props.data);

    return (
        <section className="watch-list">
            <div className="container">
                <div className="watch-list__wrapper">
                    <h2 className="watch-list__title">Your watchlist:</h2>
                    {items}
                </div>
            </div>
        </section>
    )
};

export default WatchList;
