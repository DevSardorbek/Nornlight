import React from "react";
import { useSelector } from "react-redux";
import CartComponent from "../../components/cartComponent/CartComponent";
import EmptyCart from "../../components/emptyCart/EmptyCart";

const Basket = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  return <>{cart.length ? <CartComponent /> : <EmptyCart />}</>;
};

export default Basket;
