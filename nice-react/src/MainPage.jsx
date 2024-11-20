// src/MainPage.js
import { useEffect, useState } from "react";
import axios from "axios";

function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: "205f4bdf2770aca75748e606de538da0", // 여기에 자신의 moviedb API 키를 입력하세요
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 데이터를 가져오는데 실패했습니다.");
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default MainPage;
