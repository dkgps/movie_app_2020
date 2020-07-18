import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  
  getMovies = async() => {    //시간이 필요
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false})  //this.setState({movies: movies}); 축약
  }

  componentDidMount(){
    //영화 데이터 로딩
    this.getMovies();
  }
  render(){
    const {isLoading,movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map((movie) => (
            //console.log(movie);
            
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              ))}
            </div>
            
        )}
    </section>
    );
  }
}

export default App;
