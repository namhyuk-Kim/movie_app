import React from "react";
import Axios from "axios";
import Movie from "./movies";
import "./app.css";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({
      movies,
      isLoding:false,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className="container">
        {this.state.isLoding ? (
          <div className="loader">
            <span className="loader_text">Loding...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}></Movie>;
            })}
          </div>
        )}
      </section>
    );
  }
}
export default App;
