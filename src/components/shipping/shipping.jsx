import clsx from "clsx";
import css from "./shipping.module.css";
export default function Shipping() {
  return (
    <section className={css.shipping}>
      <div className={clsx("container", css.shipping___container)}>
        <div className={css.shipping__bgImg}></div>
        <p className={css.shipping__info}>
          The best shipping for you!{" "}
          <span className={css.greenAccent}>Your products</span> always arrive
          in the <span className={css.orangeAccent}>best</span> conditions!
        </p>
      </div>
    </section>
  );
}
