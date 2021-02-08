import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
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
      <Route exact path={routes.home} component={HomePage} />
    <Route
      strict
      path={routes.movie}
      render={props => <MovieDetailsPage {...props} />}
    />
      <Route exact path={routes.movies} component={MoviesPage} />
      </Switch>
  </Suspense>
);
export default Routing;