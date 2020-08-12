import React, { useState, useEffect } from "react";
import { dataMovies } from "../API";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const CarouselSlide = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const datahAPI = async () => {
      setNowPlaying(await dataMovies());
    };

    datahAPI();
  }, []);
  const movies = nowPlaying.slice(0, 6).map((item, index) => {
    return (
      <div style={{ width: "100%" }} key={index}>
        <div className="carousel">
          <img src={item.photos} alt={item.title} className="d-block w-100" />
        </div>
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="row ">
        <div className="col">
          <RBCarousel
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={3000}
            version={4}
            indicators={false}
          >
            {movies}
          </RBCarousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
