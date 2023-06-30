import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import LOGO from "../../assets/images/logo.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidCopyright } from "react-icons/bi";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Giới thiệu",
  },
  {
    path: "/login",
    display: "Đăng nhập",
  },
  {
    path: "/register",
    display: "Đăng kí",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={LOGO} alt="" />
              <p>Hân hạnh mang trải nghiệm tốt nhất đến cho bạn!</p>

              <div className="social__links">
                <span>
                  <Link to="#">
                    <BiLogoFacebookCircle />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <AiFillInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <AiFillGithub />
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Khám phá</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="footer__list">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Danh mục khác</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="footer__list">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="footer__list-contact">
                <h6>
                  <span>
                    <BiSolidMap className="footer__list-icon" />
                  </span>
                  Địa chỉ:
                </h6>

                <p>Đà Nẵng, Việt Nam</p>
              </ListGroupItem>

              <ListGroupItem className="footer__list-contact">
                <h6>
                  <span>
                    <MdMail className="footer__list-icon" />
                  </span>
                  Email:
                </h6>

                <p>vnntruong1510@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="footer__list-contact">
                <h6>
                  <span>
                    <PiPhoneCallFill className="footer__list-icon" />
                  </span>
                  Liên lạc:
                </h6>

                <p>+0775-577-623</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="copyright">
            <p><BiSolidCopyright className="copyright__icon" /> Produce {year}, by NhatTruong</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
