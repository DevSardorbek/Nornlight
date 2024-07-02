import React from "react";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";
import "../../sass/__blog.scss";
import BlogComponent from "../../components/blogComponent/BlogComponent";

const Blog = () => {
  return (
    <>
      <div className="blog__wrapper">
        <div className="header__container">
          <div className="blog__line">
            <Link to="/">Главная</Link>
            <img src={line} alt="line" />
            <p>Блог</p>
          </div>
          <h1>Блог</h1>
        </div>
      </div>
      <BlogComponent showButton={false} /> {/* Button ko'rinmaydi */}
      <BlogComponent showButton={false} /> {/* Button ko'rinmaydi */}
    </>
  );
};

export default Blog;
