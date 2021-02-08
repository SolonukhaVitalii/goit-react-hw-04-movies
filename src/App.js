import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import NotFoundPage from './components/NotFoundPage';
import s from './App.module.css';



const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/" className={s.NavLink} activeClassName={s.NavLinkactive}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={s.NavLink} activeClassName={s.NavLinkactive}>
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
