import React from "react";
import del from "../../../assets/delete.png";
import edit from "../../../assets/edit.png";
import "../../../sass/__managecategory.scss";
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../context/api/categoryApi";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageCategory = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id).unwrap();
      toast.success("Category deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete category.");
    }
  };

  return (
    <div className="manage__category">
      <h1>Manage Category</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading categories.</p>}
      {data?.map((el) => (
        <div key={el.id} className="category__items">
          <p>{el.title}</p>
          <article>
            <button>
              <img src={edit} alt="" />
            </button>
            <button onClick={() => handleDelete(el.id)}>
              <img src={del} alt="" />
            </button>
          </article>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default ManageCategory;
