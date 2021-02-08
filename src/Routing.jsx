import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//import HomePage from './components/HomePage';
//import MovieDetailsPage from './components/MovieDetailsPage';
//import MoviesPage from './components/MoviesPage';

const HomePage = lazy(() =>
  import('./components/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage'));
const MoviesPage = lazy(() =>
  import('./components/MoviesPage'));

const Routing = () => (
  <Suspense fallback={<h1>Загружаем...</h1>}>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route
      strict
      path="/movies/:movieId"
      render={props => <MovieDetailsPage {...props} />}
    />
      <Route exact path="/movies" component={MoviesPage} />
      </Switch>
  </Suspense>
);
export default Routing;