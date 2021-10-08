import { useState, useEffect, Suspense } from "react";
import { useParams, useRouteMatch, Route, Switch } from "react-router-dom";
import { movieDetailsRoutes } from "../../routes/movieDetailsRoutes";
import { getMovieDetailsById } from "../../services/api";
import { MovieDetailsPageStyled } from "./MovieDetailsPageStyled";
import ButtonGoBack from "../../components/buttonGoBack/ButtonGoBack";
import Navigation from "../../components/navigation/Navigation";

const MovieDetailsPage = ({ location, history }) => {
  const match = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [DataFromHistoryState, setSaveDataFromHistoryState] = useState(null);

  useEffect(() => {
    getMovieDetailsById(movieId)
      .then((response) => setMovie({ ...response.data }))
      .catch((error) => console.log(error));
    if (location.state) {
      setSaveDataFromHistoryState({ ...location.state });
    }
  }, [movieId, location.state]);

  const poster =
    movie && movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : `https://img.icons8.com/ios/452/image.png`;

  return (
    <>
      <MovieDetailsPageStyled>
        {movie ? (
          <>
            <ButtonGoBack
              location={location}
              history={history}
              DataFromHistoryState={DataFromHistoryState}
            />
            <div className="wrapper">
              <img className="image" src={poster} alt="poster" />
              <div className="contentWrapper">
                <h2 className="title">
                  {movie.original_title ? movie.original_title : movie.name}
                </h2>
                <p>
                  <b>User score: </b>
                  {movie.vote_average}
                </p>
                <h3 className="overview">Overview</h3>
                <p>{movie.overview}</p>
                <h3 className="genres">Genres:</h3>
                <ul>
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <li key={genre.name}>
                        <p key={genre.name}>{genre.name} </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <Navigation routes={movieDetailsRoutes} url={match.url} />
          </>
        ) : (
          <>
            <ButtonGoBack
              location={location}
              history={history}
              DataFromHistoryState={DataFromHistoryState}
            />
            <h2 style={{ textAlign: "center" }}>
              No information about this film &#128679;
            </h2>
          </>
        )}
        <Suspense fallback={<h2>Loading ...</h2>}>
          <Switch>
            {movieDetailsRoutes.map(({ path, exact, component }) => (
              <Route
                key={path}
                path={match.path + path}
                exact={exact}
                component={component}
              />
            ))}
          </Switch>
        </Suspense>
      </MovieDetailsPageStyled>
    </>
  );
};

export default MovieDetailsPage;
