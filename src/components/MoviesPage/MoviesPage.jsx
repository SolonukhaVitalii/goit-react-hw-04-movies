import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';


class MoviePage extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        const response = await Axios.get(``);
        //console.log(response.data);
        this.setState({ movies: response.data })
    }

  render() {
        return (
            <>
                <h1>Cтраница поиска фильмов по ключевому слову</h1>
                <ul>
                    {this.state.movies.map(movie => (
                      <li key={movie.id}>
                        <Link to={`${this.props.math.url}`}>{movie.title}</Link>
                      </li>
                    ))}
                </ul>
            </>
        );
    }
};

MoviePage.propTypes = {
    
};

export default MoviePage;