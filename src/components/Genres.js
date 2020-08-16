import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const dataMovieByGenre = async (genre_id) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: apiKey,
            language: "en_US",
            page: 7,
            with_genres: genre_id,
          },
        }
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
      setMovieByGenre(await dataMovieByGenre(28));
      setIsLoaded(true);
    };

    dataAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await dataMovieByGenre(genre_id));
  };

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });
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
  const movieList = movieByGenre.map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <Link to={`/movie/${item.id}`}>
          <figure>
            <img
              className="img-fluid rounded "
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
    <GenreStyle>
      <div className="row ">
        <div className="col mt-8">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h1 className="font-weight-bold" style={{ color: "#fff" }}>
            Movies List
          </h1>
        </div>
      </div>
      <div className="row mt-3">{movieList}</div>
    </GenreStyle>
  );
};

export default Genres;

const GenreStyle = styled.div`
  padding: 20px;
  margin: 35px;
  .list-inline-item .btn-outline-info {
    color: #5a606b;
    border: 1px solid #5a606b;
    margin-bottom: 10px;
    font-weight: 500;
  }
  .list-inline-item .btn-outline-info:hover {
    color: #f4c10f;
    font-weight: 700;
    border-color: #fff;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
  }
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
