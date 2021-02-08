import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './App.module.css';

const App = () => (
  <div className={s.Nav}>
    <ul className={s.NavList}>
      <li className={s.NavElement}>
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
  </div>
);

export default App;