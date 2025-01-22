import React from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John wick", release_date: "2020" },
    { id: 2, title: "Godzilla", release_date: "2024" },
    { id: 3, title: "Twisters", release_date: "2024" },
    { id: 4, title: "Godfather", release_date: "1997" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
