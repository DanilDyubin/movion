import {useState} from 'react';


import SearchForm from '../SearchForm/SearchForm';
import HeaderMoviesList from './HeaderMoviesList';

import './headerSearchForm.scss';

const HeaderSearchForm = () => { 
    const [movies, setMovies] = useState([]);
    const [active, setActive] = useState('');

    const onMoviesLoaded = (movies) => {
        setMovies(movies);
    }

    const onShowList = (active) => {
        setActive(active);
    }

    return (
        <div className="HeaderSearchForm">
            <SearchForm onMoviesLoaded={onMoviesLoaded} onShowList={onShowList}/>
            {active ? <HeaderMoviesList movies={movies}/> : null}
        </div>
    )
}

export default HeaderSearchForm;