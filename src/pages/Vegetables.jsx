import ProductList from "../components/productList/productList";

export default function VegetablesPage({ addProd, orderList }) {
  return (
    <>
      <ProductList add={addProd} orderList={orderList} />
    </>
  );
}
