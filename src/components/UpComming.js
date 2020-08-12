import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";
const UpComming = () => {
  const [upComming, setUpComming] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        setUpComming(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const listMoviesUpComming = upComming.slice(4, 8).map((item, index) => {
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
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
        </div>
      </div>
    );
  });

  return (
    <UpCommingStyle>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1 className="font-weight-bold" style={{ color: "#fff" }}>
              Movies up comming
            </h1>
            <div className="row mt-3">{listMoviesUpComming}</div>
          </div>
        </div>
      </div>
    </UpCommingStyle>
  );
};

export default UpComming;

const UpCommingStyle = styled.div`
  margin-bottom: 30px;
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
