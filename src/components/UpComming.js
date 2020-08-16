import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";
const UpComming = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const dataMovie = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      );
      const posterUrl = "https://image.tmdb.org/t/p/original/";
      const modifiedData = data["results"].map((indice) => ({
        id: indice["id"],
        title: indice["title"],
        images: posterUrl + indice["poster_path"],
      }));

      return modifiedData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dataAPI = async () => {
      setData(await dataMovie());
      setIsLoaded(true);
    };

    dataAPI();
  }, []);

  if (!isLoaded) {
    return (
      <>
        <SkeletonTheme color="#202020" highlightColor="#444">
          <p>
            <Skeleton count={15} duration={2} circle={true} />
          </p>
        </SkeletonTheme>
      </>
    );
  }

  const listMoviesUpComming = data.slice(4, 8).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
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
`;
