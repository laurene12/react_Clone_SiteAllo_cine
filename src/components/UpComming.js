import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";

const UpComming = () => {
  const [upComming, setUpComming] = useState([]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

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

  return (
    <UpCommingStyle>
      <Container>
        <h1 className="font-weight-bold mb-3">Movies up comming</h1>
        <Slider {...settings}>
          {upComming.map((item, index) => (
            <>
              <div className="col" style={{ width: "100%" }}>
                <img
                  className="img-fluid rounded"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                ></img>
              </div>
            </>
          ))}
        </Slider>
      </Container>
    </UpCommingStyle>
  );
};

export default UpComming;

const UpCommingStyle = styled.div`
  padding-bottom: 50px;
`;
