import css from "./productCard.module.css";

export default function ProductCard({ name, type, price, src }) {
  return (
    <li className={css.card}>
      <div>
        <h3>{name}</h3>
        <p className={css.card___type}>{type}</p>
      </div>
      <img src={src} />
      <p className={css.productList___price}>{price} UAH/kg</p>
    </li>
  );
}
