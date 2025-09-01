import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [load, setL] = useState(true);
  const [movies, setM] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setL(false);
    setM(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movies.medium_cover_image}></img>
          <h3>{movies.title}</h3>
          <h2>{movies.summary}</h2>
        </div>
      )}
    </div>
  );
}

export default Detail;
