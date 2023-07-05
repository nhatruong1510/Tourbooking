import React, { useRef, useState } from "react";
import "../styles/tourdetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";

import AVT from "../assets/images/avatar.jpg";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidMap } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { PiMapPinLineFill } from "react-icons/pi";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="tour__card">
                    <span className="tour__rating">
                      <BiSolidStar
                        className="tour__icon"
                        style={{ color: "var(--secondary-color)" }}
                      />
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "0"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span className="tour__first">
                      <BiSolidMap /> {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <BiSolidMap />
                      {city}
                    </span>
                    <span>
                      <RiMoneyDollarCircleFill />${price} /người
                    </span>
                    <span>
                      <PiMapPinLineFill />
                      {distance} k/m
                    </span>
                    <span>
                      <MdGroup />
                      {maxGroupSize}
                    </span>
                  </div>
                  <h5>Giới thiệu</h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews">
                  <h4>Đánh giá ({reviews?.length})</h4>

                  <Form className="rating__form" onSubmit={submitHandler}>
                    <div className="rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1 <AiTwotoneStar className="tour__icon" />
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <AiTwotoneStar className="tour__icon" />
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <AiTwotoneStar className="tour__icon" />
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <AiTwotoneStar className="tour__icon" />
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <AiTwotoneStar className="tour__icon" />
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Chia sẻ ý kiến của bạn"
                        required
                      />
                      <button className="btn primary__btn" type="submit">
                        Gửi
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={AVT} alt="" />

                        <div className="review__item-cmt">
                          <div className="review__item-avt">
                            <div>
                              <h5>Nhật Trường</h5>
                              <p>
                                {new Date("3/7/2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="">
                              5 <AiTwotoneStar className="tour__icon" />
                            </span>
                          </div>

                          <h6>Chuyến du lịch tuyệt vời</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg='4'> 
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
