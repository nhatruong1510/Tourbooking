import React from "react";
import "../styles/home.css";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Img-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

import { Container, Row, Col } from "reactstrap";

import IMG1 from "../assets/images/hero-img01.jpg";
import IMG2 from "../assets/images/hero-img02.jpg";
import IMG3 from "../assets/images/world.png";
import VID from "../assets/images/hero-video.mp4";
import IMG4 from "../assets/images/experience.png";


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
            <Col lg="12" className="featured__tour">
              <Subtitle subtitle={"Khám phá"} />
              <h2 className="featured__tour-title">
                Tham quan những dịch vụ của chúng tôi
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Kinh nghiệm"} />

                <h2>
                  Với tất cả kinh nghiệm <br /> chúng tôi sẽ phục vụ bạn tận
                  tình
                </h2>
                <p>
                  Tạo cho bạn những cảm giác tuyệt vời nhất.
                  <br />
                  Hãy tận hưởng khi trải nghiệm dịch vụ của chúng tôi.
                </p>
              </div>

              <div className="counter__wrapper">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Chuyến du lịch</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Thường xuyên</h6>
                </div>
                <div className="counter__box">
                  <span>16</span>
                  <h6>Năm kinh nghiệm</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={IMG4} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Giới thiệu"} />
              <h2 className="gallery__title">
                Hãy ghé thăm những hình ảnh của những khách hàng đã trải nghiệm
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Đánh giá'}/>
              <h2 className="testimonials__title">Khách hàng đánh giá về chúng tôi</h2>
            </Col>
            <Col lg="12">
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default Home;
