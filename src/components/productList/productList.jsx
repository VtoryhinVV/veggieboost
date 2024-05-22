import { data } from "../../data/data";
import ProductCard from "../productСard/productСard";
import css from "./productList.module.css";

export default function ProductList({ add, orderList = {}, openModal }) {
  return (
    <section className={css.productList}>
      <div className="container">
        <div className={css.productList___titleInfo}>
          <h2>oRGANIC vegetables</h2>
          <p>
            Our organic vegetables are hand-picked from local farms and
            delivered straight to your doorstep, ensuring that you get the
            freshest and most nutritious produce possible.
          </p>
        </div>
        <ul className={css.productList___products}>
          {data.map((info, idx) => {
            return (
              <ProductCard
                key={idx}
                product={info}
                handleAdd={add}
                accent={orderList}
              />
            );
          })}
        </ul>
        <button
          type="submit"
          className={css.productList___orderBtn}
          onClick={openModal}
        >
          <svg width="14" height="14">
            <use href="svg-icons.svg#icon-arrow"></use>
          </svg>
          <p>order</p>
        </button>
      </div>
    </section>
  );
}
