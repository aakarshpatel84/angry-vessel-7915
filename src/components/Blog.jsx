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

export default function Blog() {
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
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/81_inr.jpg"
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
            src="https://rukminim1.flixcart.com/flap/1800/1800/image/b6bc3ed0ef0b6fef.jpg?q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/80_inr.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/80_inr.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
