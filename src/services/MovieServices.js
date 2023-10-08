import useHttp from '../hooks/useHttp';

const useMovieService = () => {
    const {loading, request, error, clearError} = useHttp();

    // kinopoisk api
    const API_KEY = "8651d781-07bb-427d-ba6e-1bb41f5c8691";
    const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
    const API_URL_MOVIE_DETAILS = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
    // const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=one&page=";
    // const API_KEY_WORD = '';
    const API_URL_SEARCH = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=&page=1`;

    const get250Movies = async () => {
        const result = await request('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1');
        return result.films.map(transformMovie);
    }

    const getPopularMovies = async () => {
        const result = await request('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1');
        return result.films.map(transformMovie); 
    }

    const getSearchMovie = async (name) => {
        const result = await request(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}&page=1`);
        return result.films.map(transformMovie);
    }

    const getMovie = async (id) => {
        const result = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);
        return transformMovie(result);
    }

    // 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=12&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1' fantasy
    // 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=16&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1' music
    // 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=17&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1' horror
    // 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=21&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1' sport
    // 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=2&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1' drama

    const getMovieGenres = async (num) => {
        const result = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${num}&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`);
        return result.items.map(transformMovie); 
    }

    const transformMovie = (movie) => {
        return {
            title: movie.nameRu ? movie.nameRu : movie.nameOriginal,
            length: movie.filmLength,
            genre: movie.genres[0].genre || 'There is no description',
            year: movie.year,
            coverUrl: movie.coverUrl,
            posterUrl: movie.posterUrl,
            posterUrlPreview: movie.posterUrlPreview,
            rating: movie.rating ? movie.rating : movie.ratingKinopoisk,
            country: movie.countries[0].country,
            id: movie.filmId ? movie.filmId : movie.kinopoiskId,
            slogan: movie.slogan,
            description: movie.description
        }
    }
    // movie.nameRu.length > 19 ? movie.nameRu.substring(0, 20) + '...' : movie.nameRu,
    return {loading, error, clearError, get250Movies, getPopularMovies, getSearchMovie, getMovie, getMovieGenres};
}

export default useMovieService;
