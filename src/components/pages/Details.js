import React, { useState, useEffect } from "react";
import { dataMovieDetail, dataMovieVideos } from "../../API";
import styled from "styled-components";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import Layout from "../Layout/Layout";
import CastsMovies from "../CastsMovies";
import SimilarMovies from "../SimilarMovies";
import DetailsInfo from "../DetailsInfo";

const Details = ({ match }) => {
  let params = match.params;
  let genres = [];
  const [detail, setDetail] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {
      setDetail(await dataMovieDetail(params.id));
      setVideo(await dataMovieVideos(params.id));
    };

    dataAPI();
  }, [params.id]);

  genres = detail.genres;

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  const MoviePalyerModal = (props) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#000000", fontWeight: "bolder" }}
          >
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000" }}>
          <ReactPlayer
            className="container-fluid"
            url={youtubeUrl + video.key}
            playing
            width="100%"
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <Layout>
        <DetailsStyle>
          <MoviePalyerModal
            show={isOpen}
            onHide={() => {
              setIsOpen(false);
            }}
          ></MoviePalyerModal>
          <div className="row ">
            <div className="col text-center" style={{ width: "100%" }}>
              <img
                className="d-block w-100"
                src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
                alt={detail.title}
              ></img>
              <div className="carousel-center">
                <i
                  onClick={() => setIsOpen(true)}
                  className="far fa-play-circle"
                  style={{ fontSize: 70, color: "red", cursor: "pointer" }}
                ></i>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mt-3">
              <div className="col">
                <h1 className="mb-3">{detail.title}</h1>
                <h5 className="mb-3"> GENRES MOVIE</h5>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <ul className="list-inline">{genresList}</ul>
              </div>
            </div>

            <DetailsInfo detail={detail} />
            <div className="row">
              <div className="col-md-5 col-sm-5">
                <CastsMovies params={params.id} />
              </div>
              <div className="col-sm-1 col-md-1"></div>
              <div className="col-md-6 col-sm-6">
                <SimilarMovies params={params.id} />
              </div>
            </div>
          </div>
        </DetailsStyle>
      </Layout>
    </>
  );
};

export default Details;

const DetailsStyle = styled.div`
  margin-bottom: 30px;
  .list-inline-item .btn-outline-info {
    color: #5a606b;
    border: 1px solid #5a606b;
    margin-bottom: 10px;
    font-weight: 500;
  }
  .list-inline-item .btn-outline-info:hover {
    color: #fff;
    border-color: #fff;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  h5 {
    color: #5a606b;
    font-weight: bolder;
  }
  .carousel-caption {
    text-align: center;
    font-size: 45px;
  }
`;
