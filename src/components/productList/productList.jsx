import { data } from "../../data/data";
import ProductCard from "../productСard/productСard";
import css from "./productList.module.css";

export default function ProductList() {
  return (
    <section>
      <div>
        <h2>oRGANIC vegetables</h2>
        <p>
          Our organic vegetables are hand-picked from local farms and delivered
          straight to your doorstep, ensuring that you get the freshest and most
          nutritious produce possible.
        </p>
      </div>
      <ul>
        {data.map((info, idx) => {
          return (
            <ProductCard
              key={idx}
              name={info.name}
              type={info.type}
              price={info.price}
              src={info.src}
            />
          );
        })}
      </ul>
    </section>
  );
}
