import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import PaginationMovies from "../PaginationMovies";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";
const PageSearch = () => {
  let { movieSearch } = useSelector((state) => {
    return state.dataMovies;
  });
  const [dataMovies, setDataMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesOnPage, setMoviesOnPage] = useState(8);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieSearch}`
      )
      .then((res) => {
        setDataMovies(res.data.results);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [movieSearch]);
  const indexOfLastPage = currentPage * moviesOnPage;
  const indexOfFirstPage = indexOfLastPage - moviesOnPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (!isLoaded) {
    return (
      <div className="conatainer mt-5" style={{ padding: "20px" }}>
        <SkeletonTheme color="#202020" highlightColor="#444">
          <p>
            <Skeleton count={15} duration={2} circle={true} />
          </p>
        </SkeletonTheme>
      </div>
    );
  }

  const moviesMatchList = dataMovies
    .slice(indexOfFirstPage, indexOfLastPage)
    .map((item, index) => {
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
            </figure>
          </Link>
        </div>
      );
    });

  return (
    <PageSearchStyle>
      <Layout>
        <Container>
          <h1 className="font-weight-bold mt-3">List Movies</h1>
          <div className="row mt-3">{moviesMatchList}</div>
          <PaginationMovies
            moviesOnPage={moviesOnPage}
            totalMovies={dataMovies.length}
            paginate={paginate}
          />
        </Container>
      </Layout>
    </PageSearchStyle>
  );
};

export default PageSearch;

const PageSearchStyle = styled.div`
  padding: 20px;
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
