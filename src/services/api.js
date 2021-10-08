import axios from "axios";

const key = 'b8a2201c7a3e5dc1c8a43eb6bfa0d8d4';

export const getMoviesTrendingAllDay = async () => {
  try {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetailsById = async(id) => {
  try {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
  } catch (error) {
    console.log(error);
  } 
}

export const getMovieCastById = async(id) => {
  try {
    return axios.get(`
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
  } catch (error) {
    console.log(error);
  }
}

export const getMovieReviewsById = async(id) => {
  try {
    return axios.get(`
    https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
  } catch (error) {
    console.log(error);
  }
}

export const getSearchMovie = async(search) => {
  try {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`)
  } catch (error) {
    console.log(error);
  }
}

