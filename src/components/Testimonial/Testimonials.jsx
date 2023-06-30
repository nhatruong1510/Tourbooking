import React from "react";
import Slider from "react-slick";
import "./testimonials.css";

import AVT1 from "../../assets/images/ava-1.jpg";
import AVT2 from "../../assets/images/ava-2.jpg";
import AVT3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    Responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial">
        <p>
          Đây là một trong những lần du lịch mà tôi rất hài lòng, chuyến trải
          nghiệm rất thú vị và phục vụ rất tốt.
        </p>
        <div className="testimonial__img">
          <img src={AVT1} className="" alt="" />
          <div className="testimonial__img-text">
            <h6>Nhật Trường</h6>
            <p>Người dùng</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p>
          Đây là một trong những lần du lịch mà tôi rất hài lòng, chuyến trải
          nghiệm rất thú vị và phục vụ rất tốt.
        </p>
        <div className="testimonial__img">
          <img src={AVT2} className="" alt="" />
          <div className="testimonial__img-text">
            <h6>Thùy Dung</h6>
            <p>Người dùng</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p>
          Đây là một trong những lần du lịch mà tôi rất hài lòng, chuyến trải
          nghiệm rất thú vị và phục vụ rất tốt.
        </p>
        <div className="testimonial__img">
          <img src={AVT3} className="" alt="" />
          <div className="testimonial__img-text">
            <h6>Viết Quang</h6>
            <p>Người dùng</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p>
          Đây là một trong những lần du lịch mà tôi rất hài lòng, chuyến trải
          nghiệm rất thú vị và phục vụ rất tốt.
        </p>
        <div className="testimonial__img">
          <img src={AVT3} className="" alt="" />
          <div className="testimonial__img-text">
            <h6>Hoàng Tú</h6>
            <p>Người dùng</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
