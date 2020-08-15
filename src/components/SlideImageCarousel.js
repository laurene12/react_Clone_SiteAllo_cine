import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";

const SlideImageCarousel = () => {
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

  const listMoviesUpComming = upComming.map((item, index) => {
    return (
      <div className="each-slide">
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
      </div>
    );
  });
  return (
    <div className="slide-container">
      <Slide>{listMoviesUpComming}</Slide>
    </div>
  );
};

export default SlideImageCarousel;
