import React from "react";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../sass/__createCategory.scss";

const initialState = {
  title: "",
};

const CreateCategory = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory(formData);
      toast.success("Category created successfully!");
      setFormData(initialState);
    } catch (error) {
      toast.error("Failed to create category.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="createCategory__wrapper">
      <h1>CreateCategory</h1>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        type="text"
        placeholder="Enter category title"
        required
      />
      <button disabled={isLoading}>Create</button>
      <ToastContainer />
    </form>
  );
};

export default CreateCategory;
