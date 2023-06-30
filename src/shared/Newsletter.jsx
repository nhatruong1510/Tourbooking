import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import IMG1 from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>
                Đăng kí để nhận ngay thông tin hữu ích về những chuyến du lịch
                thú vị
              </h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Nhập Email" />
                <button className="btn newsletter__btn">Đăng kí</button>
              </div>

              <p>
                Đăng kí để nhận ngay thông tin hữu ích về những chuyến du lịch
                thú vị
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={IMG1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
