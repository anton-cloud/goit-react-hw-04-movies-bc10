import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById } from "../../services/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(movieId).then((response) =>
      setReviews( response.data.results.length > 0 ? [...response.data.results] : null)
    
    );
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ul style={{
          listStyle:'none',
          padding: 0,
          margin: 0,
          borderTop: "2px solid aqua"
        }}>
          {reviews.map(({ author, content , id}) => (
            <li key ={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2 style={{ textAlign: "center" , borderTop: "2px solid aqua", margin: 0}}>
          We don't have any reviews for this movie &#128679;
        </h2>
      )}
    </>
  );
};

export default Reviews;
