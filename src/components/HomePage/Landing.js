import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './search';
import MoviesContainer from './allMovies';
import Spinner from '../Layout/Spinner';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);