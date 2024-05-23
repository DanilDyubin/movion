import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { useState, useEffect } from 'react';
import useMovieService from '../../services/MovieServices';

import './moviesList.scss';

const MoviesList = () => {
  return (
    <section className="movies">
      <div className="container">
        <MoviesListItem item={{ title: 'Most popular' }} />
      </div>
    </section>
  );
};

export default MoviesList;
