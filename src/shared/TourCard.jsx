import React from "react";
import "./tourcard.css";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { BiSolidMap } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Nổi bật</span>}
        </div>

        <CardBody>
          <div className="card__top">
            <span className="tour__location">
              <BiSolidMap className="tour__icon" /> {city}
            </span>
            <span className="tour__rating">
              <BiSolidStar className="tour__icon" />{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? "0" : <span>({reviews.length})</span>}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom">
            <h5>
              ${price} <span> / người</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours${id}`}>Đặt ngay</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
