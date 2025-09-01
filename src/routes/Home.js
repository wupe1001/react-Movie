import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [load, setL] = useState(true);
  const [movies, setM] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );

    const json = await response.json();
    setM(json.data.movies);
    setL(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
