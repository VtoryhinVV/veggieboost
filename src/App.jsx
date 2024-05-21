import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HowItWorksPage from "./pages/HowItWorksPage";
import VegetablesPage from "./pages/Vegetables";
import ContactPage from "./pages/ContactPage";
import ModalOrder from "./components/modal/modalOrder";
import { useState } from "react";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function addProductToList(prod) {
    if (orderList.find((option) => option.name === prod.name)) {
      handleDeleteProd(prod);
      return;
    }
    setOrderList([...orderList, prod]);
  }
  function handleDeleteProd(prod) {
    setOrderList(orderList.filter((option) => option.name !== prod.name));
  }

  function handleChangeWeight(name, weight) {
    const updatedItems = orderList.map((item) =>
      item.name === name ? { ...item, weightOrder: weight } : item
    );
    setOrderList(updatedItems);
  }
  function order(name) {
    if (orderList.find((prod) => prod.name === name)) {
      return true;
    }
    return false;
  }

  return (
    <>
      <Header openModal={openModal} amount={orderList.length} />
      <Routes>
        <Route
          path="/"
          element={<Home addProd={addProductToList} orderList={order} />}
        />
        <Route path="/how_it_works" element={<HowItWorksPage />} />
        <Route
          path="/products"
          element={
            <VegetablesPage addProd={addProductToList} orderList={order} />
          }
        />
        <Route path="/contacts" element={<ContactPage />} />
        <Route
          path="*"
          element={<Home addProd={addProductToList} orderList={order} />}
        />
      </Routes>
      <ModalOrder
        close={closeModal}
        status={modalIsOpen}
        list={orderList}
        handleChangeWeight={handleChangeWeight}
      />
      <Footer />
    </>
  );
}

export default App;
