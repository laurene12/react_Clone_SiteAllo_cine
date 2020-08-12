import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";

const MeilleursFilms = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        setTopMovies(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const topMoviesList = topMovies.slice(0, 8).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div>
          <Link to={`/movie/${item.id}`}>
            <img
              className="img-fluid rounded"
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title}
            ></img>
          </Link>
        </div>

        <div>
          <h6 style={{ fontWeight: "bolder" }}>{item.title}</h6>
          <p>Notes:{item.vote_average}</p>
        </div>
      </div>
    );
  });

  return (
    <MeilleursFilmStyle>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1 className="font-weight-bold">Top Movies</h1>
            <div className="row mt-3">{topMoviesList}</div>
          </div>
        </div>
      </div>
    </MeilleursFilmStyle>
  );
};

export default MeilleursFilms;

const MeilleursFilmStyle = styled.div`
  padding: 20px;
  .fa-arrow-alt-circle-right {
    color: #f4c10f;
    font-size: 40px;
    font-weight: bolder;
    cursor: pointer;
  }
  .fa-arrow-alt-circle-right:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
`;
