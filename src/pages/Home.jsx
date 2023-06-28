import React from "react";
import "../styles/home.css";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

import { Container, Row, Col } from "reactstrap";
import IMG1 from "../assets/images/hero-img01.jpg";
import IMG2 from "../assets/images/hero-img02.jpg";
import IMG3 from "../assets/images/world.png";
import VID from "../assets/images/hero-video.mp4";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle">
                  <Subtitle subtitle={"Những điều cần biết"} />
                  <img src={IMG3} alt="World" />
                </div>
                <h1>
                  Những chuyến du lịch tuyệt vời{" "}
                  <span className="highlight"> ký ức</span>
                </h1>
                <p>
                  Những chuyến du lịch tuyệt vời, Những chuyến du lịch tuyệt
                  vời, Những chuyến du lịch tuyệt vời, Những chuyến du lịch
                  tuyệt vời, Những chuyến du lịch tuyệt vời, Những chuyến du
                  lịch tuyệt vời
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={IMG1} alt="IMG1" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box video1">
                <video src={VID} alt="VIDEO" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box img2">
                <img src={IMG2} alt="IMG2" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Những gì chúng tôi phục vụ</h5>
              <h2 className="services__title">
                Chúng tôi cung cấp dịch vụ tốt nhất
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="featured__tour">
              <Subtitle subtitle={"Khám phá"}/>
              <h2 className="featured__tour-title">Tham quan những dịch vụ của chúng tôi</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
