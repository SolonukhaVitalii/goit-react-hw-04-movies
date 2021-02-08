import Axios from 'axios';

const KEY = 'ab234249b42ad0b5c11163146e7a690b';

export const fetchTrending = () => {
  const API = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
  return Axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export const fetchMovieDetails = id => {
  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  return Axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export const fetchMovieCast = id => {
  const API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`;
  return Axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export const fetchMovieReviews = id => {
  const API = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return Axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export const fetchMovies = query => {
  const API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return Axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};