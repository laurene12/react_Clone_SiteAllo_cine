import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dataTopMovies } from "../API";

const MeilleursFilms = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {
      setTopMovies(await dataTopMovies());
    };
    dataAPI();
  }, []);

  const topMoviesList = topMovies.slice(0, 8).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <Link to={`/movie/${item.id}`}>
          <figure>
            <img
              className="img-fluid rounded"
              src={item.photos}
              alt={item.title}
            />
            <figcaption>{item.title}</figcaption>
            <p className="text-white">Vote:{item.vote}</p>
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
            <hr></hr>
            <h1 className="font-weight-bold text-center">Top Movies</h1>
            <hr></hr>
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
  hr {
    border: 1px solid #f4c10f;
  }
`;
