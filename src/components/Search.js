import React, { Component } from 'react';

class Search extends Component {
    state = { movieQuery: '' };

    updateMovieQuery = event => {
        this.setState({ movieQuery: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchMovie();
        }
    }

    searchMovie = () => {
        this.props.searchMovie(this.state.movieQuery);
    }

    render() {
        return (
            <div className='content-container'>
                <input
                    placeholder="Search for a Movie"
                    onChange={this.updateMovieQuery}
                    onKeyPress={this.handleKeyPress} />
                <button onClick={this.searchMovie}>Search</button>
            </div>
        )
    }
}

export default Search;