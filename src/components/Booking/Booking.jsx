import React from "react";
import "./booking.css";
import { Form, FormGroup, Button } from "reactstrap";

import { BiSolidStar } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const handleChange = (e) => {};

  return (
    <div className="booking">
      <div className="booking__top">
        <h3>
          ${price}
          <span> / người</span>
        </h3>
        <span className="tour__rating">
          <BiSolidStar className="booking__icon" />
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Thông tin</h5>
        <Form className="booking__info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Họ và tên"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="SĐT"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup className="booking__info-book">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder=""
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <div className="">
          <h5>
            ${price} <IoIosClose /> 1 Người
          </h5>
          <span>${price}</span>
        </div>

        <div className="">
          <h5>Service Charge</h5>
          <span>$10</span>
        </div>

        <div className="">
          <h5>Tổng</h5>
          <span>$109</span>
        </div>
      </div>
    </div>
  );
};

export default Booking;
