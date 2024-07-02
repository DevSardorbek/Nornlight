import React from "react";
import CatalogComponent from "../../components/catalogComponent/CatalogComponent";
import catalogimg1 from "../../assets/catalogimg1.png";
import catalogimg2 from "../../assets/catalogimg2.png";
import catalogimg3 from "../../assets/catalogimg3.png";
import catalogimg4 from "../../assets/catalogimg4.png";
import catalogimg5 from "../../assets/catalogimg5.png";
import catalogimg6 from "../../assets/catalogimg6.png";
import catalogimg7 from "../../assets/catalogimg7.png";
import catalogimg8 from "../../assets/catalogimg8.png";
import catalogimg9 from "../../assets/catalogimg9.png";
import catalogimg10 from "../../assets/catalogimg10.png";
import catalogimg11 from "../../assets/catalogimg11.png";

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
  {
    id: 7,
    title: "Трековые светильники",
    img: catalogimg7,
  },
  {
    id: 8,
    title: "Уличные светильники",
    img: catalogimg8,
  },
  {
    id: 9,
    title: "Технические светильники",
    img: catalogimg9,
  },
  {
    id: 10,
    title: "Светодиодные ленты",
    img: catalogimg10,
  },
  {
    id: 11,
    title: "Комплектуюшие",
    img: catalogimg11,
  },
];

const CatalogPage = () => {
  return (
    <div className="catalogpage">
      <CatalogComponent showItems={false} catalogItems={catalog} />
    </div>
  );
};

export default CatalogPage;
