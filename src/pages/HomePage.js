import { useEffect, useState } from "react";
import { getMoviesTrendingAllDay } from "../services/api";
import { Link} from "react-router-dom";
import { mainRoutes } from "../routes/mainRoutes";
import Section from "../components/section/Section";

const HomePage = ({ location }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMoviesTrendingAllDay()
      .then((response) => setTrendingMovies([...response.data.results]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Section title='Trending today' >
      {trendingMovies && (
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${mainRoutes[1].path}/${movie.id}`,
                  state: { from: location.pathname },
                }}
              >
                {movie.original_title ? movie.original_title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default HomePage;
