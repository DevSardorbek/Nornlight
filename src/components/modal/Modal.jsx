import React from "react";

const Modal = ({ children, setShow }) => {
  return (
    <>
      <div onClick={() => setShow(false)} className="overly"></div>
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
