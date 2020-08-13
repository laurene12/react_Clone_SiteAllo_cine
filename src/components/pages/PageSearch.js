import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import PaginationMovies from "../PaginationMovies";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";
const PageSearch = () => {
  let { movieSearch } = useSelector((state) => {
    return state.dataMovies;
  });
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesOnPage, setMoviesOnPage] = useState(8);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieSearch}`
      )
      .then((res) => {
        setDataMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [movieSearch]);
  const indexOfLastPage = currentPage * moviesOnPage;
  const indexOfFirstPage = indexOfLastPage - moviesOnPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const moviesMatchList = dataMovies
    .slice(indexOfFirstPage, indexOfLastPage)
    .map((item, index) => {
      if (loading) {
        return <h1>Loading</h1>;
      }
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
          <div className="mt-3">
            <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          </div>
        </div>
      );
    });

  return (
    <Layout>
      <Container>
        <h1 className="font-weight-bold mb-3">List Movies</h1>
        <div className="row mt-3">{moviesMatchList}</div>
        <PaginationMovies
          moviesOnPage={moviesOnPage}
          totalMovies={dataMovies.length}
          paginate={paginate}
        />
      </Container>
    </Layout>
  );
};

export default PageSearch;
