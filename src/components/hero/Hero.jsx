import React from "react";
import heroimg from "../../assets/heroimg.png";
import "../../sass/__hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="hero__section">
              <h1>
                Скидка 15% на все подвесные светильники до 5{" "}
                <span> февраля</span>
              </h1>
              <img src={heroimg} alt="Hero" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__section">
              <h1>
                Скидка 15% на все подвесные светильники до 5{" "}
                <span> февраля</span>
              </h1>
              <img src={heroimg} alt="Hero 2" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
