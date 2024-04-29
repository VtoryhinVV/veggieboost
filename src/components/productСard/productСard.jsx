export default function ProductCard({ name, type, price, src }) {
  return (
    <li>
      <h3>{name}</h3>
      <p>{type}</p>
      <img src={src} />
      <p>{price} UAH/kg</p>
    </li>
  );
}
