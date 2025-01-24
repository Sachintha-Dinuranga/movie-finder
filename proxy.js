// import express from "express";
// import fetch from "node-fetch";

// const app = express();
// const PORT = 3001;
// const API_KEY = "e4ef8de16cd817c5b80d9d34fbfa796a";
// const BASE_URL = "https://api.themoviedb.org/3";

// app.get("/api/movie/popular", async (req, res) => {
//   const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//   const data = await response.json();
//   res.json(data);
// });

// app.get("/api/search/movie", async (req, res) => {
//   const query = req.query.query;
//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
//       query
//     )}`
//   );
//   const data = await response.json();
//   res.json(data);
// });

// app.listen(PORT, () => {
//   console.log(`Proxy server running on http://localhost:${PORT}`);
// });
