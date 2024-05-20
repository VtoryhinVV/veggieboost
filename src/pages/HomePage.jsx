import Banner from "../components/banner/banner";
import EasyStep from "../components/easyStep/easyStep";
import Hero from "../components/hero/hero";
import ModalOrder from "../components/modal/modalOrder";
import OrderCall from "../components/orderCall/orderCall";
import ProductList from "../components/productList/productList";
import Shipping from "../components/shipping/shipping";

export default function Home({ addProd }) {
  return (
    <>
      <Hero />
      <EasyStep />
      <Banner />
      <ProductList add={addProd} />
      <Shipping />
      <OrderCall />
      <ModalOrder />
    </>
  );
}
