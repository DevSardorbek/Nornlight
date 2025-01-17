import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import "./sass/style.scss";
import About from "./pages/about/About";
import Payment from "./pages/payment/Payment";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Contact from "./pages/contact/Contact";
import Favorites from "./pages/favorites/Favorites";
import Blog from "./pages/blog/Blog";
import Catalog from "./pages/catalog/Catalog";
import Modal from "./components/modal/Modal";
import Request from "./components/request/Request";
import { useState } from "react";
import Detail from "./pages/detail/Detail";
import Basket from "./pages/basket/Basket";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import NotFound from "./components/notFoutnd/NotFound";
import CreateCategory from "./pages/admin/createCategory/CreateCategory";
import ManageCategory from "./pages/admin/manageCategory/ManageCategory";
import EditProduct from "./pages/admin/editProduct/EditProduct";
import AllProducts from "./pages/allProducts/AllProducts";

function App() {
  const [show, setShow] = useState(false);
  const isAdminPath = (pathname) => pathname.includes("/admin");
  return (
    <>
      {!isAdminPath(window.location.pathname) && <Header setShow={setShow} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-category" element={<ManageCategory />} />
            <Route path="edit-product/:id" element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>
      {show ? (
        <Modal setShow={setShow}>
          <Request />
        </Modal>
      ) : (
        <></>
      )}
      {!isAdminPath(window.location.pathname) && <Footer />}
    </>
  );
}

export default App;
