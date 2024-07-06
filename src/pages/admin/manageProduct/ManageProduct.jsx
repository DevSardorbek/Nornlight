import React from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../../context/api/productApi";
import edit from "../../../assets/edit.png";
import del from "../../../assets/delete.png";
import "../../../sass/__manage.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ManageProduct = () => {
  const { data, isLoading, isError, isSuccess } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let items = data?.map((el) => (
    <div key={el.id} className="manage__card">
      <div className="card__img">
        <img src={el?.imageUrl[0]} alt="" />
      </div>
      <div className="card__info">
        <p>{el?.title}</p>
        <div>
          <article>
            <del>${el?.price * 1.5}</del>
            <h3>${el?.price}</h3>
          </article>
          <div className="card__btn">
            <button onClick={() => navigate(`/admin/edit-product/${el.id}`)}>
              <img src={edit} alt="" />
            </button>
            <button onClick={() => deleteProduct(el.id)}>
              <img src={del} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="manageProduct__wrapper">
      <h1>Manage product</h1>
      <div className="cart__items">{items}</div>
    </div>
  );
};

export default ManageProduct;
