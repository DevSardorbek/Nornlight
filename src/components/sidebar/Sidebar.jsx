import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineManageHistory } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { FaHistory } from "react-icons/fa";
import "../../sass/__sidebar.scss";
import create from "../../assets/createProduct.png";
import manage from "../../assets/manageProduct.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (confirm("Ishonchingiz komilmi?")) {
      localStorage.removeItem("x-auth-token");
      navigate("/");
    }
  };
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <Link to={"/"}>
          <FaArrowAltCircleLeft />
        </Link>
        <span>Dashboard</span>
      </h2>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"create-product"}>
            <img src={create} alt="" />
            <span>Create product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"manage-product"}>
            <img src={manage} alt="" />
            <span>Manage product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"create-category"}>
            <img src={create} alt="" />
            <span>Create category</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"manage-category"}>
            <img src={manage} alt="" />
            <span>Manage category</span>
          </NavLink>
        </li>
      </ul>
      <div className="sidebar__item sidebar__btn">
        <button className="sidebar__link" onClick={handleLogOut}>
          <RiLogoutBoxLine />
          Hisobdan Chiqish
        </button>
      </div>
    </div>
  );
};

export default memo(Sidebar);
