import React, { Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import { fetchMovieDetails } from '../../services/movie-api';
import ClassComponent from '../../decor/ClassComponent';
import handleGoBack from '../../services/GoBackHandler';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = props => {
  const IMG = 'https://image.tmdb.org/t/p/w500';
  const { data } = props;
  if (data) {
    const { url } = props.match;
    const {
      title,
      poster_path,
      vote_average,
      overview,
      genres,
      release_date,
    } = data;
    const releaseDate = release_date.slice(0, 4);
    return (
      <Fragment>
        <button className={s.Button}type="button" onClick={() => handleGoBack(props)}>
          Go back
        </button>
        <div className={s.MovieDetails}>
          <img className={s.MoviePoster} src={IMG + poster_path} alt={title} />
          <div>
            <h1>
              {title} ({releaseDate})
            </h1>
            <span>User Score {vote_average * 10}%</span>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres && genres.map(el => <span key={el.id}>{el.name} </span>)}
          </div>
        </div>
        <div className={s.AdditionalInfo}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route
              path="/movies/:movieId/cast"
              render={props => <Cast {...props} />}
            />
            <Route
              path="/movies/:movieId/reviews"
              render={props => <Reviews {...props} />}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
  return null;
};

export default ClassComponent(MovieDetailsPage, {
  fetchData: fetchMovieDetails,
});