import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/81_inr.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/78_inr.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/82_inr.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/83_inr.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/84_inr.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
