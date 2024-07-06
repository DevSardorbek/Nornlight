import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import katalogBar from "../../assets/catalog-bar.png";
import search from "../../assets/search.png";
import heart from "../../assets/heart.png";
import statistics from "../../assets/comparison.png";
import cart from "../../assets/cart.png";
import "../../sass/__header.scss";
import { useSelector } from "react-redux";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";

const Header = ({ setShow }) => {
  const liked = useSelector((state) => state.wishlist.value);
  const cart_items = useSelector((state) => state.cart.value);

  const navigate = useNavigate();
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <div className="header__top">
          <div className="header__top-links">
            <Link to={"/company"}>О компании</Link>
            <Link to={"/delivery"}>Доставка и оплата</Link>
            <Link to={"/return"}>Возврат</Link>
            <Link to={"/garant"}> Гарантии</Link>
            <Link to={"/contact"}>Контакты</Link>
            <Link to={"/blog"}>Блог</Link>
            <button
              onClick={() => navigate("/catalog")}
              className="btn1 btn_cat"
            >
              <img src={katalogBar} alt="" />
              <p>Каталог</p>
            </button>
          </div>
          <div className="header__top-contact">
            <p>8 (800) 890-46-56</p>
            <span onClick={() => setShow(true)}>Заказать звонок</span>
          </div>
        </div>
        <div className="header__bottom">
          <div className="burger">
            <button>
              <HiOutlineMenuAlt3 />
            </button>
          </div>
          <Link to={"/"} className="header__bottom-logo">
            <img src={logo} alt="" />
            <h2>NORNLIGHT</h2>
          </Link>
          <button onClick={() => navigate("/catalog")} className="btn1">
            <img src={katalogBar} alt="" />
            <p>Каталог</p>
          </button>
          <form>
            <input type="text" placeholder="Поиск по товарам" />
            <img src={search} alt="" />
          </form>
          <div className="header__bottom-info">
            <Link to={"/favorites"}>
              <img src={heart} alt="heart" />
              <p>Избранное</p>
              <span>{liked.length}</span>
            </Link>
            <Link to={"/admin"} className="comparison">
              <RxAvatar />
              <p>Admin</p>
            </Link>
            <Link className="cart__leng" to={"/basket"}>
              <img src={cart} alt="heart" />
              <p>Корзина</p>
              <span>{cart_items.length}</span>
            </Link>
          </div>
        </div>
        <div className="header__form-botttom">
          <form>
            <input type="text" placeholder="Поиск по товарам" />
            <img src={search} alt="" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
