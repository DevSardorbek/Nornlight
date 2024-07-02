import React from "react";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";
import "../../sass/__contact.scss";
import YandexMap from "../../components/yandexMap/YandexMap";
const Contact = () => {
  return (
    <>
      <div className="contact__wrapper">
        <div className="header__container">
          <div className="contact__section">
            <article>
              <div className="line">
                <Link>Главная</Link>
                <img src={line} alt="" />
                <p>Контакты</p>
              </div>
              <h1>Контакты</h1>
            </article>
            <article className="adress">
              <h3>8 (800) 890-46-56</h3>
              <p>Пн-Пт: 10:00 до 19:00</p>
              <p>Сб-Вс: заказ через корзину</p>
              <p>Телефоны:</p>
            </article>
          </div>
        </div>
      </div>
      <YandexMap />
    </>
  );
};

export default Contact;
