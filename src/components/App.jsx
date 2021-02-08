import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './App.module.css';
import routes from '../routes';

const App = () => (
  <div className={s.Nav}>
    <ul className={s.NavList}>
      <li className={s.NavElement}>
        <NavLink to={routes.home} className={s.NavLink} activeClassName={s.NavLinkactive}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.movies} className={s.NavLink} activeClassName={s.NavLinkactive}>
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default App;