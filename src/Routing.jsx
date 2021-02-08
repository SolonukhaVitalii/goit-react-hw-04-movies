import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage';
import MoviesPage from './components/MoviesPage';
import NotFoundPage from './components/NotFoundPage';

const Routing = () => (
  <Fragment>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route
      strict
      path="/movies/:movieId"
      render={props => <MovieDetailsPage {...props} />}
    />
      <Route exact path="/movies" component={MoviesPage} />
      <Route component={NotFoundPage} />
      </Switch>
  </Fragment>
);
export default Routing;