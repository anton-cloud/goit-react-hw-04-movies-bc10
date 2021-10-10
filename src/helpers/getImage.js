export   const getImage = (value) =>
value && value.poster_path
  ? `https://image.tmdb.org/t/p/w500${value.poster_path}`
  : `https://media.istockphoto.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?k=20&m=1244034031&s=612x612&w=0&h=WFpMBZ7PfLCJrK4F9764OsAls0NbOJOza8CIiP3Yfc8=`;
