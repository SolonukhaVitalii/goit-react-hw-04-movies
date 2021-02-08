import React from 'react';
import { NavLink } from 'react-router-dom';
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
  </>
);

export default App;