import React, { useEffect } from "react";
import "../../../sass/__createProduct.scss";
import {
  useUpdateProductMutation,
  useGetProductByIdQuery,
} from "../../../context/api/productApi";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: initialState, isLoading: isFetching } =
    useGetProductByIdQuery(id);
  const [update, { isLoading }] = useUpdateProductMutation();
  const { formData, handleChange, setFormData } = useGetInputValue(
    initialState || {}
  );

  useEffect(() => {
    if (initialState) {
      setFormData(initialState);
    }
  }, [initialState, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      price: +formData.price,
      imageUrl: Array.isArray(formData.imageUrl)
        ? formData.imageUrl
        : formData.imageUrl.split("\n").filter((i) => i.trim()),
    };

    try {
      await update({ id, body: updatedData }).unwrap();
      toast.success("Product updated successfully");
      navigate("/admin/manage-product");
    } catch (err) {
      toast.error("Failed to update product");
      console.error("Failed to update product: ", err);
    }
  };

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="createProduct__wrapper">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={formData?.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Price</p>
          <input
            type="text"
            name="price"
            value={formData?.price || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Image-url</p>
          <textarea
            name="imageUrl"
            value={formData?.imageUrl || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Category</p>
          <select
            name="category"
            value={formData?.category || ""}
            onChange={handleChange}
          >
            <option value="tel">telefon</option>
            <option value="notebook">notebook</option>
            <option value="televizor">televizor</option>
          </select>
        </label>
        <label>
          <p>Desc</p>
          <textarea
            name="desc"
            value={formData?.desc || ""}
            onChange={handleChange}
          ></textarea>
        </label>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditProduct;
