import { useState } from "react";

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

export default function ModalOrder({ close, status, list }) {
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
      {list &&
        list.map((info, idx) => {
          return <div key={idx}>{info.name}</div>;
        })}
      <form>
        <input />
        <input />
        <input />
        <input />
      </form>
    </Modal>
  );
}
