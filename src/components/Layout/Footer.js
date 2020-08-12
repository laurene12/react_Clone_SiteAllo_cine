import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* colomn 1 */}
            <div className="col-md-7 col-sm-5  ">
              <h4>Contacts</h4>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <strong>
                      <i className="fas fa-map-marker-alt"></i> Address:
                    </strong>{" "}
                    Ville Kinshasa, RDC
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <i className="fas fa-map-marker-alt"></i> Phone:
                    </strong>{" "}
                    Tel: (243) 812 874 074
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <i className="fas fa-envelope"></i> Email:
                    </strong>{" "}
                    <a href="mailto:bitotalaurene@gmail.com">
                      bitotalaurene@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            {/* colomn 2 */}
            <div className="col-md-5 col-sm-7   ">
              <ul className="list-unstyled">
                <li className="mb-3">
                  Inscrivez-vous à notre newsletter pour vous tenir au courant
                  de nos activités.
                </li>

                <li>
                  <form className="form-inline">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Votre mail ici"
                      aria-label="Search"
                      style={{ width: "50%" }}
                    />

                    <button type="button" className="btn btn-outline">
                      S'inscrire
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p className="text-xs-center">
            Copyright &copy;{new Date().getFullYear()} Laurene Bitota - Dev Web
            et Mobile
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  color: #fff;
  .footer-middle {
    background-color: #1f232c;
    padding-top: 2rem;
    font-size: 15px;
  }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #282c34;
    font-size: 13px;
    color: rgba(172, 172, 172);
  }

  ul li a {
    color: rgba(109, 109, 109);
  }
  ul li a:hover {
    color: rgba(172, 172, 172);
  }
  button {
    background-color: #f4c10f;
    font-weight: bolder;
  }
  button:hover {
    color: #f4c10f;
    border-color: #000;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
  }
`;
