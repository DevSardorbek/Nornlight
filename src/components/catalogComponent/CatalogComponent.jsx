import React from "react";
import right from "../../assets/right.png";
import right2 from "../../assets/right2.png";
import catalogimg1 from "../../assets/catalogimg1.png";
import catalogimg2 from "../../assets/catalogimg2.png";
import catalogimg3 from "../../assets/catalogimg3.png";
import catalogimg4 from "../../assets/catalogimg4.png";
import catalogimg5 from "../../assets/catalogimg5.png";
import catalogimg6 from "../../assets/catalogimg6.png";
import "../../sass/__componentCatalog.scss";

const catalog = [
  {
    id: 1,
    title: "Люстры",
    img: catalogimg1,
  },
  {
    id: 2,
    title: "Светильники",
    img: catalogimg2,
  },
  {
    id: 3,
    title: "Бра",
    img: catalogimg3,
  },
  {
    id: 4,
    title: "Торшеры",
    img: catalogimg4,
  },
  {
    id: 5,
    title: "Настольные лампы",
    img: catalogimg5,
  },
  {
    id: 6,
    title: "Споты",
    img: catalogimg6,
  },
];

const CatalogComponent = () => {
  let card = catalog.map((el) => (
    <div key={el.id} className="catalogComponent__card">
      <div className="card__info">
        <h3>{el.title}</h3>
        <button>
          <p>От 540₽</p>
          <img src={right2} alt="" />
        </button>
      </div>
      <div className="card__img">
        <img src={el.img} alt="" />
      </div>
    </div>
  ));

  return (
    <div className="catalogComponent__wrapper">
      <div className="header__container">
        <div className="catalogComponent__title">
          <h1>Каталог</h1>
          <button>
            <p>Весь каталог</p>
            <img src={right} alt="" />
          </button>
        </div>
        <div className="catalogComponent__section">{card}</div>
      </div>
    </div>
  );
};

export default CatalogComponent;
