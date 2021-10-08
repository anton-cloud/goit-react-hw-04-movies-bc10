import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastById } from "../../services/api";
import { CastStyled } from "./CastStyled";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCastById(movieId).then((response) =>
      setCast([...response.data.cast])
    );
  }, [movieId]);
    
  return (
    <>
      {cast && (
        <CastStyled>
          {cast.map(({ id, profile_path, name }) => (
            <li className='item' key={id}>
              <img className='image'
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://img.icons8.com/ios/452/image.png`
                }
                alt={name}
              />
              <p className='nameText'>{name}</p>
            </li>
          ))}
        </CastStyled>
      )}
    </>
  );
};

export default Cast;
