import React, { Component } from 'react';
import Axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    descr: null,
    title: null,
  };

  async componentDidMount() {
    const {movieId} = this.props.math.params
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}`);
    this.setState({...response.data });
    }

  render() {
        return (
            <>
            <h1>Cтраница с детальной информацией о кинофильме {this.props.math.params.movieId}</h1>
            <img src={this.state.imgUrl} alt="" />
            <h2>{this.state.title}</h2>
            <p>{this.state.descr}</p>
            </>
        );
    }
};

MovieDetailsPage.propTypes = {
    
};

export default MovieDetailsPage;