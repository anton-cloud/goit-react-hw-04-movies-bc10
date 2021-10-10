import React from "react";
import { Link } from "react-router-dom";
import { getImage } from "../../helpers/getImage";
import { MoviesListStyled } from "./MoviesListStyled";

const MoviesList = ({movies, path, location, nameSearch = null}) => {
  return (
    <MoviesListStyled>
      {movies.map((movie) => (
        <li className='moviesItem' key={movie.id}>
          <Link 
          className='moviesLink'
            to={{
              pathname: `${path}/${movie.id}`,
              state: { from: location.pathname, search: nameSearch },
            }}
          >
            <img src={getImage(movie)} alt={movie.name} className='moviesImage'/>
          </Link>
          <p className ='moviesText'>{movie.original_title ? movie.original_title : movie.name}</p> 
        </li>
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
