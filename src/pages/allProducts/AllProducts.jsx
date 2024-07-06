import React from "react";
import Products from "../../components/products/Products";
import "../../sass/__allProducts.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";
const AllProducts = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="allProducts__wrapper">
      <div className="header__container">
        <div className="allProducts__section">
          <div className="line">
            <Link>Главная</Link>
            <img src={line} alt="" />
          </div>
          <h1>Популярные товары</h1>
        </div>
      </div>
      <Products data={data} />
    </div>
  );
};

export default AllProducts;
