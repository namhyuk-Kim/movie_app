import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, title, summary, poster, year, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
          {genres.map((genres, index) => (
            <li className="movie_genres" key={index}>        
              {genres}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0,140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
