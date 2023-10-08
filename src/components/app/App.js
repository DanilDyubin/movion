import Header from '../Header/Header';
import MainPage from '../pages/MainPage';
import MoviesGenres from '../MoviesGenres/MoviesGenres';
import SingleMoviePage from '../pages/SingleMoviePage/SingleMoviePage';
import Footer from '../Footer/Footer';
import Page404 from '../pages/404';
import WatchList from '../WatchList/WatchList';

import {useState} from 'react';

import moviesData from '../../movies-data.json';

import MovieContextProvider from '../../store/MovieContextProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    const [data, setData] = useState(moviesData);

    const onRemoveMovie = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    }

    const onAddMovie = ({title, id, rating, posterUrl, genre, year}) => {
        const item = {
            title: title,
            id: id,
            rating: rating,
            posterUrl: posterUrl, 
            genre: genre, 
            year: year
        };
        // const index = newData.findIndex(item => item.id === id); 
        // const before = newData.slice(0, index); 
        // const after = newData.slice(index + 1);
        // const filteredData = [...before, ...after];
        let isInArray = false;
        data.map(item => {
            if (item.id === id) {
                isInArray = true;
            }
        });
        if (!isInArray) {
            const newData = [...data, item];
            setData(newData);
        }
    }

    return (
        <Router>
            <MovieContextProvider>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage onAddMovie={onAddMovie}/>}/>
                        <Route path="/watchList" element={<WatchList data={data} onRemoveMovie={onRemoveMovie}/>}></Route>
                        <Route path="/movies" element={<MoviesGenres/>}/>
                        <Route path="/movies/:filmId" element={<SingleMoviePage onAddMovie={onAddMovie}/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
                <Footer/>
            </MovieContextProvider>
        </Router>
    )
}

export default App;
