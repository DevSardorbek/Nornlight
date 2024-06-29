import React from "react";
import Hero from "../../components/hero/Hero";
import CatalogComponent from "../../components/catalogComponent/CatalogComponent";
import Advantages from "../../components/advantages/Advantages";
import BrandsComponents from "../../components/brandsComponent/BrandsComponents";
import BlogComponent from "../../components/blogComponent/BlogComponent";
import LampsComponent from "../../components/lampsComponent/LampsComponent";

const Home = () => {
  return (
    <div>
      <Hero />
      <CatalogComponent />
      <Advantages />
      <BrandsComponents />
      <BlogComponent />
      <LampsComponent />
    </div>
  );
};

export default Home;
