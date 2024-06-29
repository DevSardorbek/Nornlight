import React from "react";
import right from "../../assets/right2.png";
import img1 from "../../assets/advenimg1.png";
import img2 from "../../assets/advenimg2.png";
import img3 from "../../assets/advenimg3.png";
import img4 from "../../assets/advenimg4.png";
import "../../sass/__adventages.scss";
const items = [
  {
    id: 1,
    title: "Только проверенные бренды",
    desc: "Бренды, проверенные временем и качеством",
    img: img1,
  },
  {
    id: 2,
    title: "Самые низкие цены",
    desc: "Ниже не будет нигде",
    img: img2,
  },
  {
    id: 3,
    title: "Быстрая доствка",
    desc: "Доставляем по всей РФза 1-10 дней",
    img: img3,
  },
  {
    id: 4,
    title: "Большой ассортимент",
    desc: "Более 1000 товаров",
    img: img4,
  },
];

const Advantages = () => {
  let card = items.map((el) => (
    <div key={el.id} className="adventages__card">
      <div className="card__img">
        <span>
          <img src={el.img} alt="" />
        </span>
      </div>
      <div className="card__info">
        <h3>{el.title}</h3>
        <p>{el.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="advantages__wrapper">
      <div className="header__container">
        <div className="advantages__title">
          <h1>Почему NORNLIGHT?</h1>
          <button className="btn">
            <p>О компании</p>
            <img src={right} alt="" />
          </button>
        </div>
        <div className="advantages__section">{card}</div>
        <button className="btn show">
          <p>О компании</p>
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Advantages;
