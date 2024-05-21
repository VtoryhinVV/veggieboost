import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ModalOrder({
  close,
  status,
  list = [],
  handleChangeWeight,
}) {
  function handleChange(ev) {
    const { id, value } = ev.target;
    handleChangeWeight(id, value);
  }

  function totalPrice() {
    return list.reduce((acc, prod) => acc + prod.price * prod.weightOrder, 0);
  }

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   text: "",
  // };
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <Modal
      isOpen={status}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Order Modal"
      closeTimeoutMS={250}
    >
      <h2>Your Order</h2>
      <button onClick={close}>close</button>
      {list && (
        <>
          <ul>
            {list.map((info, idx) => {
              return (
                <li key={idx}>
                  <label htmlFor={info.name}>{info.name}</label>
                  <input
                    id={info.name}
                    type="number"
                    placeholder={info.weightOrder}
                    onChange={handleChange}
                  />
                  <p>{info.price}</p>
                </li>
              );
            })}
          </ul>
          <div>
            <p>Total Price</p>
            <p>{totalPrice()}</p>
          </div>
        </>
      )}
      {/*
      <form onSubmit={formik.handleSubmit}>
        <button type="submit">Submit</button>
      </form> */}
    </Modal>
  );
}
