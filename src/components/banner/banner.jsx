import css from "./banner.module.css";
export default function Banner() {
  return (
    <div className={css.banner}>
      <img
        src="/img/blockAfter.png"
        alt="Enjoy 40% off on vitamins! Take care of your health."
      />
    </div>
  );
}
