import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dataSimilarMovie } from "../API";

const SimilarMovies = ({ params }) => {
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {
      setSimilarMovie(await dataSimilarMovie(params));
    };
    dataAPI();
  }, [params]);

  const similarMovieList = similarMovie.slice(0, 9).map((item, index) => {
    return (
      <div className="col-md-4 col-sm-6" key={index}>
        <Link to={`/movie/${item.id}`}>
          <figure>
            <img
              className="img-fluid rounded"
              src={item.photos}
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
          <h5 className="mb-3" style={{ color: " #f4c10f" }}>
            {" "}
            SIMILAR MOVIES
          </h5>
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
