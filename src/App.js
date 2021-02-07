import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';



const App = () => <>
  <Route path="/" component={HomePage} />
  <Route path="/movies" component={HomePage} />
  <Route path="/movies/:movieId" component={HomePage} />
  <Route path="/movies/:movieId/cast" component={HomePage} />
  <Route path="/movies/:movieId/reviews" component={HomePage} />
  </>;

export default App;
