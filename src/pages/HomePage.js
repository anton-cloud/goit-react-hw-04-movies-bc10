import { useEffect, useState } from "react";
import { getMoviesTrendingAllDay } from "../services/api";
import { mainRoutes } from "../routes/mainRoutes";
import Section from "../components/section/Section";
import MoviesList from "../components/moviesList/MoviesList";

const HomePage = ({ location }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMoviesTrendingAllDay()
      .then((response) => setTrendingMovies([...response.data.results]))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Section title="Trending today">
      {trendingMovies && (
        <MoviesList
          movies={trendingMovies}
          path={mainRoutes[1].path}
          location={location}
          nameSearch
        />
      )}
    </Section>
  );
};

export default HomePage;
