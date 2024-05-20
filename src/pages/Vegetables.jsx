import ProductList from "../components/productList/productList";

export default function VegetablesPage({ addProd }) {
  return (
    <>
      <ProductList add={addProd} />
    </>
  );
}
