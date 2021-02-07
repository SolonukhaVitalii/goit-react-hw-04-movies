import React, { Component } from 'react';
import Axios from 'axios';
//import PropTypes from 'prop-types';

class MoviesPage extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        const response = await Axios.get();
        //console.log(response.data);
        this.setState({ movies: response.data })
    }

    render() {
        return (
            <>
                <h1>Cтраница поиска фильмов по ключевому слову</h1>
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            </>
        );
    }
};

MoviesPage.propTypes = {
    
};

export default MoviesPage;