import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";
const SimilarMovies = ({ params }) => {
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params}/similar?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        setSimilarMovie(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);

  const similarMovieList = similarMovie.slice(0, 9).map((item, index) => {
    return (
      <div className="col-md-4 col-sm-6" key={index}>
        <Link to={`/movie/${item.id}`}>
          <figure>
            <img
              className="img-fluid rounded"
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title}
            />
            <figcaption>{item.title}</figcaption>
          </figure>
        </Link>
      </div>
    );
  });

  return (
    <SimilarMoviesStyle>
      <div className="row mt-3">
        <div className="col">
          <h5 className="mb-3"> SIMILAR MOVIES</h5>
          <div className="row mt-3">{similarMovieList}</div>
        </div>
      </div>
    </SimilarMoviesStyle>
  );
};

export default SimilarMovies;

const SimilarMoviesStyle = styled.div`
  h5 {
    color: #5a606b;
    font-weight: bolder;
  }
  figure:hover {
    color: #f4c10f;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
  }
  a {
    color: #fff;
    text-decoration: none;
    list-style: none;
    font-weight: 500;
  }
`;
