import {useState} from 'react';
import useMovieService from '../../services/MovieServices';
import './searchForm.scss';

const SearchForm = (props) => {

    const [activeInput, setActiveInput] = useState('');
    const [term, setTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const {getSearchMovie, clearError} = useMovieService();

    const onInput = (e) => {
        setTerm(e.target.value);
    }

    const onMoviesLoadedLocal = (movies) => {
        setMovies(movies);
        props.onMoviesLoaded(movies);
    }

    const submitForm = (e) => {
        clearError();
        e.preventDefault();
        const name = term;
        if (name.length === 0) {
            return;
        };
        getSearchMovie(name)
        .then(onMoviesLoadedLocal);
        props.onShowList(true);
        setTerm('');
    }

    const onOpen = (activeInput) => {
        setActiveInput(true);
    }

    const onClose = () => {
        setActiveInput(false);
        props.onShowList(false);
        setTerm('');
    }

    const searchFormClasses = `search-form ${activeInput ? 'search-form__active' : ''}`;

    return (
        <form className={searchFormClasses} onSubmit={submitForm}>
            <button onClick={onOpen} className="search-form__btn-search btn-reset" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </button>
            <input className="search-form__input" placeholder="Search" value={term} onChange={onInput}/>  
            <button onClick={onClose} className="search-form__btn-close btn-reset">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </button>
        </form>
    )
}

export default SearchForm;