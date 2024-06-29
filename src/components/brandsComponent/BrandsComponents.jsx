import React from "react";
import img1 from "../../assets/brimg1.png";
import img2 from "../../assets/brimg2.png";
import img3 from "../../assets/brimg3.png";
import img4 from "../../assets/brimg4.png";
import left from "../../assets/left.png";
import right from "../../assets/right3.png";
import "../../sass/__brandsComponent.scss";

const BrandsComponents = () => {
  return (
    <div className="brandsComponent__wrapper">
      <div className="header__container">
        <div className="brandsComponent__title">
          <h1>Только проверенные бренды</h1>
          <div>
            <button>
              <img src={left} alt="" />
            </button>
            <button>
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        <div className="brandsComponent__section">
          <span>
            <img src={img1} alt="" />
          </span>
          <span>
            <img src={img2} alt="" />
          </span>
          <span>
            <img src={img3} alt="" />
          </span>
          <span>
            <img src={img4} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandsComponents;
