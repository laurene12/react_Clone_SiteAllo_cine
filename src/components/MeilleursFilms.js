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
        <Link to={`/movie/${item.id}`}>
          <figure>
            <img
              className="img-fluid rounded"
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title}
            />
            <figcaption>{item.title}</figcaption>
            <p className="text-white">Vote:{item.vote_average}</p>
          </figure>
        </Link>
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
  figure:hover {
    color: #f4c10f;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
  }
  img:hover {
    box-shadow: 0px 0px 2px 1px #f4c10f;
  }
  a {
    color: #fff;
    text-decoration: none;
    list-style: none;
    font-weight: 500;
  }
`;
