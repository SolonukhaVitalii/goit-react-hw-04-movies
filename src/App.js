import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import NotFoundPage from './components/NotFoundPage';



const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/" className="NavLink" activeClassName="NavLinkactive">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className="NavLink" activeClassName="NavLinkactive">
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
