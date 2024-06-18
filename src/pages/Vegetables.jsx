import ProductList from "../components/productList/productList";

export default function VegetablesPage({ addProd, orderList, openModal }) {
  return (
    <>
      <ProductList add={addProd} orderList={orderList} openModal={openModal} />
    </>
  );
}
