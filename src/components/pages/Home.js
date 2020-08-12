import React from "react";
import CarouselSlide from "../CarouselSlide";
import Layout from "../Layout/Layout";
import UpComming from "../UpComming";
import MeilleursFilms from "../MeilleursFilms";

const Home = () => {
  return (
    <>
      <Layout>
        <CarouselSlide />
        <MeilleursFilms />
        <UpComming />
      </Layout>
    </>
  );
};

export default Home;
