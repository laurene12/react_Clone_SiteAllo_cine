import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../Layout/Layout";
import Genres from "../Genres";

const Movies = () => {
  return (
    <>
      <Layout>
        <Container>
          <Genres />
        </Container>
      </Layout>
    </>
  );
};

export default Movies;
