import React from "react";
import "../../../sass/__createProduct.scss";
const CreateProduct = () => {
  return (
    <div className="createProduct__wrapper">
      <h1>CreateProduct</h1>
      <form>
        <label>
          <p>Title</p>
          <input type="text" />
        </label>
        <label>
          <p>Price</p>
          <input type="text" />
        </label>
        <label>
          <p>Image-url</p>
          <input type="text" />
        </label>
        <label>
          <p>Category</p>
          <select name="" id="">
            <option value="tel">telefon</option>
            <option value="notebook">notebook</option>
            <option value="televizor">televizor</option>
          </select>
        </label>
        <label>
          <p>Desc</p>
          <textarea name="" id=""></textarea>
        </label>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
