import css from "./buttonHero.module.css";

export default function ButtonHero({ name }) {
  return <div className={css.button}>{name}</div>;
}
