import React from "react";
import styled from "styled-components";

const DetailsInfo = ({ detail }) => {
  let productionContries = [];
  productionContries = detail.production_countries;

  let productionContriesList;
  if (productionContries) {
    productionContriesList = productionContries.map((indice, key) => {
      return (
        <span className="list-inline-item" key={key}>
          {indice.name} |
        </span>
      );
    });
  }
  return (
    <DetailsInfoStyle>
      <div className="row mt-3">
        <div className="col-sm-5">
          <h5 className="mb-3" style={{ color: " #f4c10f" }}>
            DETAILS
          </h5>
          <ul className="list-unstyled">
            <li className="mb-1">
              <p>
                RELEASE DATE : <span>{detail.release_date}</span>
              </p>
              <hr></hr>
            </li>
            <li className="mb-1">
              <p>
                ORIGINAL LANGUAGE : <span>{detail.original_language}</span>
              </p>
              <hr></hr>
            </li>
            <li className="mb-1">
              <p>
                STATUS : <span>{detail.status}</span>
              </p>
              <hr></hr>
            </li>
            <li className="mb-1">
              <p>PRODUCTION CONTRIES : {productionContriesList}</p>
              <hr></hr>
            </li>
          </ul>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-6">
          <h5 className="mb-3" style={{ color: " #f4c10f" }}>
            OVERVIEW
          </h5>
          {detail.overview}
        </div>
      </div>
    </DetailsInfoStyle>
  );
};

export default DetailsInfo;

const DetailsInfoStyle = styled.div`
  span {
    color: #fff;
  }
  p {
    color: #5a606b;
    font-weight: bolder;
  }

  hr {
    border-top: 2px solid #5a606b;
  }
`;
