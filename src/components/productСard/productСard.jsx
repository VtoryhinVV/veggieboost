import clsx from "clsx";
import css from "./productCard.module.css";

export default function ProductCard({ product, handleAdd, accent }) {
  return (
    <li
      className={clsx(css.card, { [css.isOutlined]: accent(product.name) })}
      onClick={() => handleAdd({ ...product, weightOrder: 1 })}
    >
      <div>
        <h3>{product.name}</h3>
        <p className={css.card___type}>{product.type}</p>
      </div>
      <img src={product.src} />
      <p className={css.productList___price}>{product.price} UAH/kg</p>
    </li>
  );
}
