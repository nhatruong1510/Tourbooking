import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import WEAIMG from "../assets/images/weather.png";
import GUIIMG from "../assets/images/guide.png";
import CUSTOMIMG from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: WEAIMG,
    title: "Thời tiết",
    desc: "Thời tiết hôm nay rất là đẹp, phù hợp với những chuyến đi xa.",
  },
  {
    imgUrl: GUIIMG,
    title: "Chuyến du lịch tốt nhất",
    desc: "Cung cấp những chuyến du lịch tốt nhất, làm hài lòng khách hàng.",
  },
  {
    imgUrl: CUSTOMIMG,
    title: "Tùy chọn",
    desc: "Đa dạng lựa chọn, phù hợp với mọi khách hàng.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
