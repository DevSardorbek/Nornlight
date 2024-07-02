import React from "react";
import right from "../../assets/right.png";
import right2 from "../../assets/right2.png";
import "../../sass/__componentCatalog.scss";

const CatalogComponent = ({ catalogItems, showItems = true }) => {
  let card = catalogItems.map((el) => (
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
          {showItems && (
            <button>
              <p>Весь каталог</p>
              <img src={right} alt="" />
            </button>
          )}
        </div>
        <div className="catalogComponent__section">{card}</div>
      </div>
    </div>
  );
};

export default CatalogComponent;
