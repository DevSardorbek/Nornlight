import React from "react";

const YandexMap = () => {
  return (
    <div
      className="container"
      style={{
        position: "relative",
        overflow: "hidden",
        marginBottom: "120px",
      }}
    >
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
        width="100%"
        height="672"
        style={{ position: "relative", border: "none" }}
      ></iframe>
    </div>
  );
};

export default YandexMap;
