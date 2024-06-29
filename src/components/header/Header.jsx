import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import katalogBar from "../../assets/catalog-bar.png";
import search from "../../assets/search.png";
import heart from "../../assets/heart.png";
import statistics from "../../assets/comparison.png";
import cart from "../../assets/cart.png";
import "../../sass/__header.scss";
const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <div className="header__top">
          <div className="header__top-links">
            <Link to={"/company"}>О компании</Link>
            <Link to={"/delivery"}>Доставка и оплата</Link>
            <Link to={"/return"}>Возврат</Link>
            <Link to={"/guarantees"}> Гарантии</Link>
            <Link to={"/contact"}>Контакты</Link>
            <Link to={"/blog"}>Блог</Link>
          </div>
          <div className="header__top-contact">
            <p>8 (800) 890-46-56</p>
            <span>Заказать звонок</span>
          </div>
        </div>
        <div className="header__bottom">
          <Link to={"/"} className="header__bottom-logo">
            <img src={logo} alt="" />
            <h2>NORNLIGHT</h2>
          </Link>
          <button className="btn1">
            <img src={katalogBar} alt="" />
            <p>Каталог</p>
          </button>
          <form>
            <input type="text" placeholder="Поиск по товарам" />
            <img src={search} alt="" />
          </form>
          <div className="header__bottom-info">
            <span>
              <img src={heart} alt="heart" />
              <p>Избранное</p>
            </span>
            <span>
              <img src={statistics} alt="heart" />
              <p>Сравнение</p>
            </span>
            <span>
              <img src={cart} alt="heart" />
              <p>Корзина</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
