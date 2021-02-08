import React from 'react';
import { fetchMovieCast } from '../../services/movie-api';
import ClassComponent from '../../decor/ClassComponent';
import s from './Cast.module.css';

const Cast = ({ data }) => {
  const IMG = 'https://image.tmdb.org/t/p/w500';
  if (data)
    return data.cast.map(el => (
      <ul className={s.List} key={el.cast_id}>
        <li>
          <img className={s.Img}src={IMG + el.profile_path} alt={el.name} />
        </li>
        <li>{el.name}</li>
        <li>Character: {el.character}</li>
      </ul>
    ));
  return null;
};

export default ClassComponent(Cast, { fetchData: fetchMovieCast });