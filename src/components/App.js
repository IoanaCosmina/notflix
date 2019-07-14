import React, { Component } from 'react';
import Movie from './Movie';
import Search from './Search';

//https://www.omdbapi.com/?t=Titanic&apikey=55eb6564
const API_ADDRESS = 'https://www.omdbapi.com/';
const API_KEY = '55eb6564';

class App extends Component {
    state = { movie: null };

    componentDidMount() {
        this.searchMovie('Guardians of the Galaxy');
    }

    searchMovie = movieQuery => {
        fetch(`${API_ADDRESS}/?t=${movieQuery}&apikey=${API_KEY}&plot=full`)
            .then(response => response.json())
            .then(json => {
                if (json.Title != null) {
                    const movie = json;
                    this.setState({ movie });
                }
            })
            .catch(error => console.log('Error:', error.message));
    }

    render() {
        console.log('this.state', this.state);
        return (
            <div>
                <h2>NotFLIX</h2>
                <Search searchMovie={this.searchMovie} />
                <Movie movie={this.state.movie} />
            </div>
        )
    }
}

export default App;