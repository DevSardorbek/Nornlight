import React from "react";
import right from "../../assets/right2.png";
import img1 from "../../assets/blimg1.png";
import img2 from "../../assets/blimg2.png";
import img3 from "../../assets/blimg3.png";
import top from "../../assets/top.png";
import "../../sass/__blogComponent.scss";

const BlogComponent = ({ showButton = true }) => {
  return (
    <div className="blogComponent__wrapper">
      <div className="header__container">
        {showButton && (
          <div className="blogComponent__title">
            <h1>Блог</h1>
            {showButton && (
              <button className="btn">
                <p>Перейти в блог</p>
                <img src={right} alt="" />
              </button>
            )}
          </div>
        )}

        <div className="blogComponent__section">
          <div className="blogComponent__card">
            <div className="card__img">
              <img src={img1} alt="" />
            </div>
            <div className="card__info">
              <article>
                <h3>Как правильно освещать дом снаружи?</h3>
                <img src={top} alt="" />
              </article>
              <span>01.01.2024</span>
            </div>
          </div>
          <div className="blogComponent__card">
            <div className="card__img">
              <img src={img2} alt="" />
            </div>
            <div className="card__info">
              <article>
                <h3>Как правильно освещать дом снаружи?</h3>
                <img src={top} alt="" />
              </article>
              <span>01.01.2024</span>
            </div>
          </div>
          <div className="blogComponent__card">
            <div className="card__img">
              <img src={img3} alt="" />
            </div>
            <div className="card__info">
              <article>
                <h3>Как правильно освещать дом снаружи?</h3>
                <img src={top} alt="" />
              </article>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="btn__show">
          <button className="btn show">
            <p>Перейти в блог</p>
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
