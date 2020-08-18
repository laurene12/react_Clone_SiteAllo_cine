import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";
const CastsMovies = ({ params }) => {
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params}/credits?api_key=${apiKey}`
      )
      .then((res) => {
        setCasts(res.data.cast);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params]);
  const castList = casts.slice(0, 5).map((cast, index) => {
    return (
      <div className="row mb-3 " id="info_cast" key={index}>
        <div className="img_cast">
          <img
            className="img-fluid rounded mx-auto d-block"
            src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
            alt={cast.name}
          ></img>
        </div>
        <div className="nom_cast">
          <h6>{cast.name}</h6>
          <h6>
            Role: <span>{cast.character}</span>
          </h6>
        </div>
      </div>
    );
  });

  return (
    <CastsMoviesStyle>
      <div className="container">
        <div className="row mt-3 col-sm-6">
          <div className="col">
            <h5 className="mb-3" style={{ color: " #f4c10f" }}>
              ACTORS MOVIE
            </h5>
          </div>
        </div>
        <div>{castList}</div>
      </div>
    </CastsMoviesStyle>
  );
};

export default CastsMovies;

const CastsMoviesStyle = styled.div`
  span {
    color: #5a606b;
  }
  #info_cast {
    display: flex;
  }
  img {
    width: 100px;
    height: 150px;
  }
  .nom_cast {
    padding: 50px 5px;
  }
`;
