import React, {useEffect, useState } from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import { getSearchMovie } from "../../services/api";
import { MoviePageStyled } from "./MoviePageStyled";

const MoviesPage = ({ location, match, history }) => {
  const [nameSearch, setNameMovie] = useState("");
  const [moviesByName, setMoviesByName] = useState(null);

  const search = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (search) {
      getSearchMovie(search).then((response) =>
        setMoviesByName(response.data.results)
      );
    }
    setNameMovie(search);
  }, [search]);

  const onHandleChange = (e) => {
    setNameMovie(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log('ok');
    if (nameSearch === "") {
      return;
    }
    getSearchMovie(nameSearch).then((response) =>
      setMoviesByName(response.data.results)
    );
    history.push({ ...location, search: `?query=${nameSearch}` });
    setNameMovie("");
  };

  return (
    <MoviePageStyled>
      <form className ='movieForm' onSubmit={onHandleSubmit}>
        <label >
          <input
            type="text"
            name="movie"
            placeholder="Enter the title of the movie !"
            // value={nameSearch}
            onChange={onHandleChange}
            className="movieInput"
          />
        </label>
        {nameSearch && (
          <button type="submit" className="movieButton">
            Search
          </button>
        )}
      </form>
      {moviesByName && (
        <MoviesList
          movies={moviesByName}
          path={match.path}
          location={location}
          nameSearch={nameSearch}
        />
      )}
    </MoviePageStyled>
  );
};

export default MoviesPage;
