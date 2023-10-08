import Promo from '../Promo/Promo';
import MoviesList from '../MoviesList/MoviesList';

const MainPage = (props) => {
    return (
        <>
            <Promo onAddMovie={props.onAddMovie}/>
            <MoviesList/>
        </>
    )
}

export default MainPage;