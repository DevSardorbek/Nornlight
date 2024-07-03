import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../sass/__admin.scss";
// Components
import Sidebar from "../../components/sidebar/Sidebar";
import AdminHeader from "../../components/adminHeader/AdminHeader";

const Admin = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <div className={`admin ${close ? "close" : ""}`}>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
