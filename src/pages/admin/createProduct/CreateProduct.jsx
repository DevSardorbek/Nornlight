import React from "react";
import "../../../sass/__createProduct.scss";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  price: "",
  imageUrl: "",
  category: "",
  desc: "",
};

const CreateProduct = () => {
  const [create, { isLoading }] = useCreateProductMutation();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.price = +formData.price;
    formData.imageUrl = formData.imageUrl.split("\n").filter((i) => i.trim());

    try {
      await create(formData).unwrap();
      setFormData(initialState);
      toast.success("Product created successfully");
    } catch (err) {
      toast.error("Failed to create product: ");
    }
  };

  return (
    <div className="createProduct__wrapper">
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Price</p>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Image-url</p>
          <textarea
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Category</p>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            disabled={isCategoriesLoading}
          >
            <option value=""></option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Desc</p>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          ></textarea>
        </label>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
