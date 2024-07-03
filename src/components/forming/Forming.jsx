import React from "react";
import "../../sass/__forming.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { deleteAllCart } from "../../context/slices/cartSlice";
import { useDispatch } from "react-redux";
let initialState = {
  UserName: "",
  tel: "",
  email: "",
  adress: "",
  comment: "",
};

const Forming = () => {
  const dispatch = useDispatch();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleLogin = (e) => {
    e.preventDefault();

    let my_text = `Result is: %0A-UserName: ${formData.UserName} %0A-Tel: ${formData.tel} %0A-Email: ${formData.email} %0A-Address: ${formData.adress} %0A-Comment: ${formData.comment}`;

    const token = "YOUR_TELEGRAM_BOT_TOKEN";
    let chat_id = "YOUR_CHAT_ID";
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Xabar muvaffaqiyatli jo'natildi");

    setFormData(initialState);
  };

  return (
    <form onSubmit={handleLogin} className="forming__wrapper">
      <div className="header__container">
        <div className="forming__section">
          <div className="forming__info">
            <h1>Оформление</h1>
            <article>
              <input
                onChange={handleChange}
                name="UserName"
                type="text"
                placeholder="ФИО"
                value={formData.UserName}
              />
              <input
                onChange={handleChange}
                name="tel"
                type="text"
                placeholder="телефон"
                value={formData.tel}
              />
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Электронная почта"
                value={formData.email}
              />
            </article>
          </div>
          <div className="forming__delivery">
            <h1>Доставка</h1>
            <input
              onChange={handleChange}
              name="adress"
              type="text"
              placeholder="Адрес доставки"
              value={formData.adress}
            />
            <textarea
              onChange={handleChange}
              name="comment"
              id=""
              placeholder="Комментарий"
              value={formData.comment}
            ></textarea>
          </div>
        </div>
        <div className="payment__section">
          <h1>Оплата</h1>
          <article>
            <div className="goods">
              <p>Товары.............................................</p>
              <p>12 300₽</p>
            </div>
            <div className="delivery_pay">
              <p>Доставка..............................................</p>
              <p>580₽</p>
            </div>
          </article>
          <h2>12 800₽</h2>
          <div className="buy">
            <button type="submit">Купить</button>
            <p>Я согласен на обработку моих персональных данных</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Forming;
