import MovieCard from "./components/MovieCard";
function App() {
  const movie = {
    title: "Godzilla",
    release_date: "2024",
  };

  return (
    <>
      <MovieCard movie={movie} />
    </>
  );
}

export default App;
