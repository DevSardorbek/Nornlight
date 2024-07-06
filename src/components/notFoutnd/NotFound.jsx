import React from "react";
import "../../sass/__notFoutd.scss";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfoud__wrapper">
      <h1>404</h1>
      <p>Похоже, ничего не нашлось :</p>
      <button onClick={() => navigate("/")}>На главную</button>
    </div>
  );
};

export default NotFound;
