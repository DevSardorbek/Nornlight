import React from "react";
import Hero from "../../components/hero/Hero";
import CatalogComponent from "../../components/catalogComponent/CatalogComponent";
import Advantages from "../../components/advantages/Advantages";
import BrandsComponents from "../../components/brandsComponent/BrandsComponents";
import BlogComponent from "../../components/blogComponent/BlogComponent";
import LampsComponent from "../../components/lampsComponent/LampsComponent";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import catalogimg1 from "../../assets/catalogimg1.png";
import catalogimg2 from "../../assets/catalogimg2.png";
import catalogimg3 from "../../assets/catalogimg3.png";
import catalogimg4 from "../../assets/catalogimg4.png";
import catalogimg5 from "../../assets/catalogimg5.png";
import catalogimg6 from "../../assets/catalogimg6.png";
const catalog = [
  {
    id: 1,
    title: "Люстры",
    img: catalogimg1,
  },
  {
    id: 2,
    title: "Светильники",
    img: catalogimg2,
  },
  {
    id: 3,
    title: "Бра",
    img: catalogimg3,
  },
  {
    id: 4,
    title: "Торшеры",
    img: catalogimg4,
  },
  {
    id: 5,
    title: "Настольные лампы",
    img: catalogimg5,
  },
  {
    id: 6,
    title: "Споты",
    img: catalogimg6,
  },
];

const Home = () => {
  const { data, isLoading, isError, isSuccess } = useGetProductsQuery();
  return (
    <div>
      <Hero />
      <CatalogComponent catalogItems={catalog.slice(0, 6)} />
      <Advantages />
      <BrandsComponents />
      <Products data={data} />
      <BlogComponent />
      <LampsComponent />
    </div>
  );
};

export default Home;
