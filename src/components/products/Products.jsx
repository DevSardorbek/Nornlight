import React, { useState } from "react";
import right from "../../assets/right2.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import "../../sass/__products.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../../context/slices/cartSlice";
import { TbShoppingCartCopy } from "react-icons/tb";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const [visibleCount, setVisibleCount] = useState(8);

  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const isProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleToggleHeart = (product) => {
    dispatch(toggleHeart(product));
  };

  const handleAddToCart = (product) => {
    if (isProductInCart(product)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (!data || data.length === 0) {
    return (
      <div className="header__container">
        <p>no product available</p>
      </div>
    );
  }

  let card = data.slice(0, visibleCount).map((product) => (
    <div key={product.id} className="products__card">
      <div className="card__img">
        <img src={product.imageUrl} alt="" />
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
          <button onClick={() => handleAddToCart(product)}>
            {isProductInCart(product) ? (
              <TbShoppingCartCopy />
            ) : (
              <HiOutlineShoppingCart />
            )}
          </button>
        </article>
      </div>
    </div>
  ));

  return (
    <div className="products__wrapper">
      <div className="header__container">
        {location.pathname !== "/all-products" && (
          <div className="products__title">
            <h1>Популярные товары</h1>
            <button onClick={() => navigate("/all-products")} className="btn">
              <p>Все товары</p>
              <img src={right} alt="" />
            </button>
          </div>
        )}
        <div className="products__section">{card}</div>
        {visibleCount < data.length && (
          <div className="see__more">
            <button className="btn" onClick={handleSeeMore}>
              See more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
