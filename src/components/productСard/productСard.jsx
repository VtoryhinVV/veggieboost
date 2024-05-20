import css from "./productCard.module.css";

export default function ProductCard({ product, handleAdd }) {
  return (
    <li className={css.card} onClick={() => handleAdd(product)}>
      <div>
        <h3>{product.name}</h3>
        <p className={css.card___type}>{product.type}</p>
      </div>
      <img src={product.src} />
      <p className={css.productList___price}>{product.price} UAH/kg</p>
    </li>
  );
}
