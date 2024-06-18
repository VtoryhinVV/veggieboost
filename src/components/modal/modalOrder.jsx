import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./modalOrder.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    minWidth: "320px",
    zIndex: "9999",
  },
};

Modal.setAppElement("#root");

export default function ModalOrder({
  close,
  status,
  list = [],
  handleChangeWeight,
  del,
}) {
  function handleChange(ev) {
    const { id, value } = ev.target;
    handleChangeWeight(id, value);
  }

  function totalPrice() {
    return list.reduce((acc, prod) => acc + prod.price * prod.weightOrder, 0);
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    text: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, "Name must be 50 characters or less")
      .required("Name is required"),
    email: Yup.string().email("Invalid email address"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone must be only digits")
      .min(10, "Phone must be at least 10 digits")
      .max(15, "Phone must be 15 digits or less")
      .required("Phone is required"),
    text: Yup.string().max(500, "Message must be 500 characters or less"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const orderDetails = list
        .map((item) => `${item.name} - ${item.weightOrder}kg`)
        .join(", ");
      alert(
        `${
          values.name
        }, your order: ${orderDetails} has been sent to our manager. The total amount is ${totalPrice()}UAH. We will contact you to confirm the order details using the provided contact information.`
      );
    },
  });

  return (
    <Modal
      isOpen={status}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Order Modal"
      closeTimeoutMS={250}
    >
      <h2 className={css.modal____title}>Your Order</h2>
      <button className={css.closeBtn} onClick={close}>
        X
      </button>
      <form onSubmit={formik.handleSubmit}>
        {list && (
          <>
            <ul className={css.modal___order}>
              {list.map((info, idx) => (
                <li key={idx}>
                  <label htmlFor={info.name}>{info.name}</label>
                  <input
                    id={info.name}
                    type="number"
                    placeholder={info.weightOrder}
                    onChange={handleChange}
                  />
                  <p> * {info.price}UAH/kg</p>
                  <button type="button" onClick={() => del(info.name)}>
                    del
                  </button>
                </li>
              ))}
            </ul>
            <div className={css.modal___totalPrice}>
              <p>Total Price: </p>
              <p>{totalPrice()} UAH</p>
            </div>
          </>
        )}

        <div className={css.modal___infoForm}>
          <div className={css.modal___formGroup}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter full name..."
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={css.error}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={css.modal___formGroup}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email..."
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={css.error}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={css.modal___formGroup}>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter phone..."
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className={css.error}>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className={css.modal___formGroup}>
            <textarea
              id="text"
              name="text"
              placeholder="Enter comments..."
              onChange={formik.handleChange}
              value={formik.values.text}
            />
            {formik.touched.text && formik.errors.text ? (
              <div className={css.error}>{formik.errors.text}</div>
            ) : null}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
}
