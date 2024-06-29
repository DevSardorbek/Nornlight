import React from "react";
import logo from "../../assets/logo.png";
import visa from "../../assets/visa.png";
import "../../sass/__footer.scss";
const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="header__container">
        <div className="footer__section">
          <div className="footer__logo">
            <div className="logo">
              <img src={logo} alt="" />
              <h2>NORNLIGHT</h2>
            </div>
            <p>8 (800) 890-46-56</p>
            <img src={visa} alt="" />
            <span>Политика конфидециальности</span>
            <span>Пользовательское соглашение</span>
            <div className="footer__vk">
              <span>VK</span>
              <span>VK</span>
              <span>VK</span>
            </div>
          </div>
          <div className="footer__buyers">
            <h4>Покупателям</h4>
            <p>О компании</p>
            <p>Доставка и оплата</p>
            <p>Возврат</p>
            <p>Гарантии</p>
            <p>Контакты</p>
            <p>Блог</p>
          </div>
          <div className="footer__product">
            <h4>Товары</h4>
            <p>Люстры</p>
            <p>Светильники</p>
            <p>Бра</p>
            <p>Торшеры</p>
            <p>Комплектуюшие</p>
            <p>Настольные лампы</p>
            <p></p>
          </div>
          <div className="footer__spot">
            <h4></h4>
            <p>Споты</p>
            <p>Трековые светильники</p>
            <p>Уличные светильники</p>
            <p>Технические светильники</p>
            <p>Светодиодные ленты</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
