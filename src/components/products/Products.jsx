import React from "react";
import right from "../../assets/right2.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import "../../sass/__products.scss";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);

  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const handleToggleHeart = (product) => {
    dispatch(toggleHeart(product));
  };

  let card = data?.map((product) => (
    <div key={product.id} className="products__card">
      <div className="card__img">
        <img src={product.image} alt="" />
        <button onClick={() => handleToggleHeart(product)}>
          {isProductInWishlist(product) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className="card__info">
        <Link to={`/products/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
        <article>
          <div>
            <del>${product.price * 1.5}</del>
            <h2>${product.price}</h2>
          </div>
          <button>
            <HiOutlineShoppingCart />
          </button>
        </article>
      </div>
    </div>
  ));

  return (
    <div className="products__wrapper">
      <div className="header__container">
        <div className="products__title">
          <h1>Популярные товары</h1>
          <button className="btn">
            <p>Все товары</p>
            <img src={right} alt="" />
          </button>
        </div>
        <div className="products__section">{card}</div>
      </div>
    </div>
  );
};

export default Products;
