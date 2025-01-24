import "../../proxy.js";
// const API_KEY = "e4ef8de16cd817c5b80d9d34fbfa796a";
const BASE_URL = "http://localhost:3001/api";

export const getPopulorMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
