import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dataMovieUpComming } from "../API";

const UpComming = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {
      setData(await dataMovieUpComming());
    };

    dataAPI();
  }, []);

  const listMoviesUpComming = data.slice(4, 8).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6 mt-3" key={index}>
        <Link to={`/movie/${item.id}`}>
          <figure>
            <img
              className="img-fluid rounded"
              src={item.images}
              alt={item.title}
            />
            <figcaption>{item.title}</figcaption>
          </figure>
        </Link>
      </div>
    );
  });

  return (
    <UpCommingStyle>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr className="col-md-3"></hr>
            <h1 className="font-weight-bold text-center">Up comming Movies</h1>
            <div className="row mt-3 ">{listMoviesUpComming}</div>
          </div>
        </div>
      </div>
    </UpCommingStyle>
  );
};

export default UpComming;

const UpCommingStyle = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  figure:hover {
    color: #f4c10f;
    transition: all 0.3s ease-in-out;
    font-weight: 700;
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
    border: 4px solid #f4c10f;
  }
`;
