import React, { lazy, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { getSearchMovie } from "../services/api";

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
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          <input
            type="text"
            name="movie"
            // value={nameSearch}
            onChange={onHandleChange}
            className="movieInput"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {moviesByName && (
        <ul>
          {moviesByName.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${match.path}/${movie.id}`,
                  state: { from: location.pathname, search: nameSearch },
                }}
              >
                {movie.original_title ? movie.original_title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
